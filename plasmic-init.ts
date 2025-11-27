import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// IMPORTA OS DOIS CLIENTES SUPABASE
import { supabaseCompany } from "./c-supabaseClient";
import { supabaseAgency } from "./a-supabaseClient";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "nQPazWnnjAGkrcpJaKckz8",
      token:
        "d2Q6R1SVggP0symutiYM6OUwXTOFasmz2YBq1uR6Y6YWdmqXcYkHu9Q63777GIquHvgnBVZi3EjnHKV7zqw",
    },
  ],
  preview: false,
});

// 🔥 REGISTRA O CONTEXTO GLOBAL PARA O SUPABASE DE FORMA DINÂMICA
PLASMIC.registerGlobalContext("supabase", () => {
  // Só roda no navegador
  if (typeof window !== "undefined") {
    const path = window.location.pathname;

    // Rota da Company
    if (path.startsWith("/c-")) {
      return supabaseCompany;
    }

    // Rota da Academy
    if (path.startsWith("/a-")) {
      return supabaseAgency;
    }
  }

  // fallback geral (caso raro)
  return supabaseCompany;
});

// PLASMIC.registerComponent(...);
