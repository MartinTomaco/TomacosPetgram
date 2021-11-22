import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GlobalStyle } from './styles/GobalStyles';
import { LogoSVG } from './componets/LogoSVG';
import { NavBar } from './componets/NavBar';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';
import { Context } from './Context';

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <LogoSVG />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pet/:CategoryId" component={Home} />
          <Route path="/detail/:DetailId" component={Detail} />

          {!isAuth && (
            <Route exact component={NotRegisteredUser} path="/login" />
          )}
          {!isAuth && <Redirect from="/favs" to="/login" />}
          {!isAuth && <Redirect from="/user" to="/login" />}
          {isAuth && <Redirect from="/login" to="/" />}

          <Route exact path="/favs" component={Favs} />
          <Route exact path="/user" component={User} />
          <Route component={NotFound} key="Error 404" />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
