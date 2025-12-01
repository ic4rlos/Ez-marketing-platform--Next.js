import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SupabaseProvider } from "../lib/SupabaseContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseProvider>
      <Component {...pageProps} />
    </SupabaseProvider>
  );
}
