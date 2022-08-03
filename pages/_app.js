import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global/globals.scss";
import "../styles/global/helper.scss";

import store from "../store";
import { Provider } from "react-redux";

import Head from "next/head";

import Modal from "../components/Modal";
import EditPostModal from "../components/Modal/EditPostModal";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="يمناك" />
        <meta property="og:image" content="/assets/logo1.png" />
      </Head>

      {/* Modals */}
      <Modal />
      <EditPostModal />

      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
