import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../context/UserContext";
import { useJivoChat } from "../hooks/useChatSupport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }: AppProps) {
  useJivoChat();
  return (
    <UserProvider>
      <Component {...pageProps} />
      <CookieConsent
        location="top"
        buttonText="Ok Agree"
        buttonClasses="bg-teal-500 p-3"
        expires={150}
        debug={true}
      >
        We collect cookies to analyze our website traffic and performance; we
        never collect any personal data
      </CookieConsent>
      <ToastContainer theme="colored" draggable closeOnClick />
    </UserProvider>
  );
}
