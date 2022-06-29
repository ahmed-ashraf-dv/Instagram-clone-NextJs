import "../styles/global/globals.scss";
import "../styles/global/helper.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "../store";
import { Provider } from "react-redux";

import Modal from "../components/Modal";
import Head from "next/head";
import EditPostModal from "../components/Modal/EditPostModal";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {/* Modals */}
      <Modal />
      <EditPostModal />

      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
