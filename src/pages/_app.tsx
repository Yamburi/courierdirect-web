import Chat from "@/components/chat";
import { LOGO } from "@/constants/images";
import { SITE_URL } from "@/lib/config";
import store, { persistor } from "@/redux/store";
import "@/styles/globals.css";
import { generateUserId } from "@/utils/local";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  // generateUserId();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer theme="dark" autoClose={3000} closeOnClick />
          <Head>
            <title>
              {pageProps?.title ||
                "Courier Direct - Swift, Reliable Shipping Solutions"}
            </title>
            <meta
              property="og:title"
              content={
                pageProps?.title ||
                "Courier Direct - Swift, Reliable Shipping Solutions"
              }
            />
            <meta
              property="og:description"
              content={
                pageProps?.description ||
                "Experience exceptional courier services with Courier Direct. We specialize in SameDay and express shipping tailored for businesses and individuals. Our comprehensive eCommerce solutions and commitment to timely, secure deliveries ensure your packages arrive safely, every time. Trust Courier Direct for efficient domestic and international shipping that meets your need"
              }
            />
            <meta
              property="og:image"
              content={pageProps?.image || `${SITE_URL}${LOGO.src}`}
            />
            <meta
              property="og:image:secure_url"
              content={pageProps?.image || `${SITE_URL}${LOGO.src}`}
            />
            <meta
              property="og:url"
              content={pageProps?.url || `https://www.courierdirect.com/`}
            />
            <meta property="og:type" content="website" />
          </Head>
          <Component {...pageProps} />
          <Chat />
        </PersistGate>
      </Provider>
    </>
  );
}
