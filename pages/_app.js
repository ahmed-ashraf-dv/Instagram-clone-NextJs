import "../styles/global/globals.scss";
import "../styles/global/helper.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import store from "../store";
import { Provider } from "react-redux";
import Modal from "../components/Modal";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Modal />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
