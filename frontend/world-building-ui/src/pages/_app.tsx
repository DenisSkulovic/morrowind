import { Provider } from 'react-redux';
import store from '../store/store';
import type { AppProps } from 'next/app';
import 'reflect-metadata';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;