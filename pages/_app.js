import { Provider } from "react-redux";
// import "styles/main.scss";
import { useStore } from "../store";
import MasterLayout from "layout/MasterLayout";
import Head from "next/head";
import "styles/bankus.css"

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>Bank Us</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/images/logo_1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="stylesheet" href="/assets/bootstrap/bootstrap.css" />
        {/* <link rel="stylesheet" href="/styles/bankus.css" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </Provider>
  );
}

export default MyApp;
