import { PLASMIC } from "@/plasmic-init";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import React from "react";

export async function getServerSideProps() {
  // ⚡ Isso força o Next a carregar o PLASMIC e registrar os componentes
  await PLASMIC.maybeFetchComponentData("/");
  return { props: {} };
}

export default function Host() {
  return <PlasmicCanvasHost />;
}

