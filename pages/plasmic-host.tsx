import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicHost() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.PLASMIC_PREVIEW = { user: "debug" };
          `,
        }}
      />
      <PlasmicCanvasHost />
    </>
  );
}

