import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "styles/main.scss";
import { useStore } from "../store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
