import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// IMPORTA OS DOIS CLIENTES SUPABASE
import { supabaseCompany } from "./lib/c-supabaseClient";
import { supabaseAgency } from "./lib/a-supabaseClient";

// IMPORTA O NOVO PROVIDER GLOBAL QUE CRIAMOS
import { SupabaseProvider } from "./lib/SupabaseContext";

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

// ❗ AGORA REGISTRAMOS O PROVIDER CORRETAMENTE
//   Sem strings. Sem funções. Nada de API errada.
//   Isso é 100% suportado pelo Plasmic.
PLASMIC.registerGlobalContext(SupabaseProvider);

// PLASMIC.registerComponent(...);

