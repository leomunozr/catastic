import React from 'react';
import { Route } from 'react-router-dom';
import Favorites from './containers/Favorites';
import Main from './containers/Main';
import Navigator from './views/Navigator';

const App = () => {
  return (
    <div>
      <Navigator />
      <Route exact path="/" component={Main} />
      <Route path="/favorites" component={Favorites} />
    </div>
  );
};

export default App;
