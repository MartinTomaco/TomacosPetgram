import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloLink, HttpLink, ApolloProvider, InMemoryCache, concat } from '@apollo/client';
import Context from './Context';
import { App } from './App';

const httpLink = new HttpLink({ uri: 'https://petgram-server-martintomaco.vercel.app/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization,
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
