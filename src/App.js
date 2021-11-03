import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GobalStyles';
import { LogoSVG } from './componets/LogoSVG';
import { NavBar } from './componets/NavBar';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import Context from './Context';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <LogoSVG />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pet/:CategoryId" component={Home} />
          <Route path="/detail/:DetailId" component={Detail} />
          <Context.Consumer>
            {({ isAuth }) => (
              <>
                <Route
                  exact
                  path="/favs"
                  render={() => (isAuth ? <Favs /> : <NotRegisteredUser />)}
                />
                <Route
                  exact
                  path="/user"
                  render={() => (isAuth ? <User /> : <NotRegisteredUser />)}
                />
              </>
            )}
          </Context.Consumer>
          
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
