import { Provider } from 'react-redux';
import store from '../store/store';
import type { AppProps } from 'next/app';
import 'reflect-metadata';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Provider>
    );
};

export default MyApp;