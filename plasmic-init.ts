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

PLASMIC.registerComponent(CorporativeSupabaseForm, {
  name: "CorporativeSupabaseForm",
  props: {
    table: "string",
    action: "string",
    payload: "object",
    where: "object",
  },
});

PLASMIC.registerGlobalContext(CorporativeUserSession, {
  name: "CorporativeUserSession",
  props: {},
});


