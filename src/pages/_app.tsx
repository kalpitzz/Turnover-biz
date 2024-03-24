import "~/styles/globals.css";
import AuthCheck from "~/components/AuthCheck";
import { api } from "~/utils/api";
import { Theme } from '@radix-ui/themes';
import { Provider } from 'react-redux'
import { reduxStore } from "../../redux/store";
import { type AppType } from "next/app";


const MyApp: AppType = ({ Component, pageProps }) => {



  return (
    <Provider store={reduxStore}>
      <Theme>
        <main className={`font-sans`}>
          <AuthCheck>
            <Component {...pageProps} />
          </AuthCheck>
        </main>
      </Theme>
    </Provider>
  );
};

export default api.withTRPC(MyApp);
