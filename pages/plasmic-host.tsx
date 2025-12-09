import React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export async function getServerSideProps() {
  await PLASMIC.maybeFetchComponentData("/");
  return { props: {} };
}

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}


