// client for graphql queries
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { contentBackendURL } from './config';

export const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: contentBackendURL }),
    cache: new InMemoryCache(),
});
