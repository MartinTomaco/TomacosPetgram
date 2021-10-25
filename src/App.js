import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GobalStyles';
import { LogoSVG } from './componets/LogoSVG';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <LogoSVG />
        <Switch>
          <Route path="/pet/:CategoryId" component={Home} />
          <Route path="/detail/:DetailId" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
