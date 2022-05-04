
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '@src/app/store';
import Layout from "@src/components/Layout";
import "@src/assets/scss/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
      <Layout>
    
          <Component {...pageProps} />
      
      </Layout>
      </Provider>
    </>
  );
};
export default App;
