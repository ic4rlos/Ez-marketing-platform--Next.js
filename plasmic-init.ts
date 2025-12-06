import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// 🔽 Novas importações
import SupabaseUserSession from "./components/SupabaseUserSession";
import SupabaseForm from "./components/SupabaseForm";
import PokedexLookup from "./components/PokedexLookup";

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
PLASMIC.registerComponent(SupabaseUserSession, {
  name: "SupabaseUserSession",
  props: {},
});

PLASMIC.registerComponent(SupabaseForm, {
  name: "SupabaseForm",
  props: {
    table: "string",
    action: "string",
    payload: "object",
    where: "object",
  },
});

PLASMIC.registerComponent(PokedexLookup, {
  name: "PokedexLookup",
  props: {
    name: "string",
  },
});
