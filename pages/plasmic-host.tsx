// pages/plasmic-host.tsx
import React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import type { GetServerSideProps } from "next";

type ComponentMeta = {
  name?: string;
  props?: Record<string, any>;
  importPath?: string;
  isGlobalContext?: boolean;
};

type Props = {
  inspect?: boolean;
  components?: ComponentMeta[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // Força o PLASMIC a carregar e registrar os code components no servidor
  try {
    // maybefetch ajuda a garantir que o loader inicialize os metadados
    await PLASMIC.maybeFetchComponentData("/"); 
  } catch (err) {
    // não falhar completamente aqui — continuamos para inspeção se necessário
    console.error("Erro ao rodar maybeFetchComponentData:", err);
  }

  // Tenta coletar os componentes registrados (API do loader pode variar)
  let components: ComponentMeta[] = [];
  try {
    // Alguns loaders expõem getRegisteredComponents; se não existir, tentamos acessar internalmente
    // (a chamada abaixo pode retornar undefined em algumas versões; protegemos contra isso)
    // @ts-ignore
    const reg = typeof PLASMIC.getRegisteredComponents === "function"
      ? PLASMIC.getRegisteredComponents()
      : undefined;

    if (Array.isArray(reg)) {
      components = reg.map((c: any) => ({
        name: c.name,
        props: c.props,
        importPath: c.importPath ?? c.filePath ?? null,
        isGlobalContext: !!c.global,
      }));
    }
  } catch (err) {
    console.error("Erro ao obter registered components:", err);
  }

  const inspect = typeof context.query?.__inspect !== "undefined";

  return {
    props: {
      inspect,
      components,
    },
  };
};

export default function PlasmicHost({ inspect, components }: Props) {
  // Modo de inspeção: renderiza JSON com os componentes que o host detectou
  if (inspect) {
    const out = {
      ok: true,
      componentCount: Array.isArray(components) ? components.length : 0,
      components: components ?? [],
    };

    // Retornamos HTML simples contendo JSON para facilitar visualização no browser
    return (
      <html>
        <body>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", padding: 12 }}>
            {JSON.stringify(out, null, 2)}
          </pre>
        </body>
      </html>
    );
  }

  // Modo normal: Canvas Host (o Plasmic Studio consumirá isso)
  return <PlasmicCanvasHost />;
}

