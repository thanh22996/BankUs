import { Provider } from "react-redux";
import "styles/main.scss";
import { useStore } from "../store";
import MasterLayout from "layout/MasterLayout";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </Provider>
  );
}

export default MyApp;
