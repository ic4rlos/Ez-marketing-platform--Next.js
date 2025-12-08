import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import CorporativeUserSession from "./components/CorporativeUserSession";
import CorporativeSupabaseForm from "./components/CorporativeSupabaseForm";

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

/*  
  🔥 REGRAS IMPORTANTES:
  - CorporativeUserSession deve ser registrado APENAS como GlobalContext
  - CorporativeSupabaseForm deve ser registrado APENAS como Component
  - Os nomes usados no "name:" DEVEM ser UNIQUE e CONSTANTES
*/

// 1) Registrar o FORM como COMPONENT NORMAL
PLASMIC.registerComponent(CorporativeSupabaseForm, {
  name: "CorporativeSupabaseForm",
  props: {
    table: "string",
    action: "string",
    payload: "object",
    where: "object",
  },
});

// 2) Registrar o USER SESSION como GLOBAL CONTEXT
PLASMIC.registerGlobalContext(CorporativeUserSession, {
  name: "CorporativeUserSession",
});

