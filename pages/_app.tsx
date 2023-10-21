import TransferContextWrapper from "../context/transfer";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransferContextWrapper>
      <Component {...pageProps} />
    </TransferContextWrapper>
  );
}

export default MyApp;
