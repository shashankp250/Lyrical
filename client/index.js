import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

//to tell react that record with particular id has updated , please render associated components
const client = new ApolloClient({
    dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client = {client} >
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate}></Route>
          <Route path="songs/:id" component={SongDetail}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
