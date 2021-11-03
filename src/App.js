import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GobalStyles';
import { LogoSVG } from './componets/LogoSVG';
import { NavBar } from './componets/NavBar';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const isLogged = false

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <LogoSVG />
        <Switch>
          <Route path="/pet/:CategoryId" component={Home} />
          <Route path="/detail/:DetailId" component={Detail} />
          <Route exact path='/favs' render={() => isLogged ? <Favs /> : <NotRegisteredUser />} />
          <Route exact path='/user' render={() => isLogged ? <User /> : <NotRegisteredUser />} />
          <Route path="/" component={Home} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
