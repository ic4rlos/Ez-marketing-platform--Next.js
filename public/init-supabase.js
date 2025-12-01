// public/init-supabase.js
// Este arquivo roda no browser e cria window.supabaseCompany e window.supabaseAgency
(function () {
  // aguarda até que a configuração exista (injetada por Embed HTML)
  function waitForConfig(maxMs = 5000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      (function poll() {
        if (window.__SUPABASE_CONFIG__) {
          resolve(window.__SUPABASE_CONFIG__);
          return;
        }
        if (Date.now() - start > maxMs) {
          reject(new Error("Supabase config not found"));
          return;
        }
        setTimeout(poll, 50);
      })();
    });
  }

  // carrega a lib oficial do Supabase via CDN (UM ÚNICO arquivo)
  function loadSupabaseJs() {
    return new Promise((resolve, reject) => {
      if (window.supabase) {
        // se já carregada (nome global), resolve com supabase
        resolve(window.supabase);
        return;
      }
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"; // CDN (ESM-compatible runtime)
      s.async = true;
      s.onload = () => {
        // Em alguns ambientes a lib está em window.supabase; em outros, o import padrão cria global
        resolve(window.supabase || (typeof supabase !== "undefined" && supabase));
      };
      s.onerror = () => reject(new Error("Failed to load supabase-js"));
      document.head.appendChild(s);
    });
  }

  async function init() {
    try {
      const cfg = await waitForConfig(5000);
      await loadSupabaseJs();
      // createClient pode vir como supabase.createClient ou window.supabase.createClient
      const createClient =
        (window.supabase && window.supabase.createClient) ||
        (typeof supabase !== "undefined" && supabase.createClient);

      if (!createClient) {
        console.warn("[init-supabase] createClient not available");
        return;
      }

      try {
        if (cfg.company && cfg.company.url && cfg.company.anonKey) {
          window.supabaseCompany = createClient(
            cfg.company.url,
            cfg.company.anonKey
          );
        }
      } catch (e) {
        console.error("[init-supabase] failed to init company client", e);
      }

      try {
        if (cfg.agency && cfg.agency.url && cfg.agency.anonKey) {
          window.supabaseAgency = createClient(
            cfg.agency.url,
            cfg.agency.anonKey
          );
        }
      } catch (e) {
        console.error("[init-supabase] failed to init agency client", e);
      }

      window.__SUPABASE_READY__ = true;
    } catch (err) {
      console.error("[init-supabase] init error", err);
    }
  }

  // inicia async sem bloquear
  init();
})();
