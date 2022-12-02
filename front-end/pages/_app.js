import '../styles/globals.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../azureAuth.config";

const msalInstance = new PublicClientApplication(msalConfig);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MsalProvider instance={msalInstance}>
        <Component {...pageProps} />
      </MsalProvider>
    </>
  );
}

export default MyApp;