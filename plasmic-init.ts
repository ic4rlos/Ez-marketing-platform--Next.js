import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// 🔽 Novas importações
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

// 🔽 Registro dos novos componentes
PLASMIC.registerComponent(CorporativeUserSession, {
  name: "CorporativeUserSession",
  props: {},
});

PLASMIC.registerComponent(CorporativeSupabaseForm, {
  name: "CorporativeSupabaseForm",
  props: {
    table: "string",
    action: "string",
    payload: "object",
    where: "object",
  },
});

// 🔽 Registrar o contexto global de usuário
PLASMIC.registerGlobalContext(CorporativeUserSession, {
  name: "C-UserSession",
  props: {},
});
