import "../styles/global/globals.scss";
import "../styles/global/helper.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "../store";
import { Provider } from "react-redux";

import Modal from "../components/Modal";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/icons/instgram.webp"></link>
      </Head>
      <Modal />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
