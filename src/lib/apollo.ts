import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
   uri: 'https://api-us-west-2.graphcms.com/v2/cl4oe4qfd22ld01xx03cme4cj/master',
   cache: new InMemoryCache()
});