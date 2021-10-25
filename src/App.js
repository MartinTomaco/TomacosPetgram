import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Category } from './componets/Category';
import { ListOfCategories } from './componets/ListOfCategories';
import { GlobalStyle } from './styles/GobalStyles';
import { ListOfPhotoCards } from './componets/ListOfPhotoCards';
import { LogoSVG } from './componets/LogoSVG';
import { PhotoCardWithQuery } from './componets/Containers/photoCardWithQuery';
import { Home } from './pages/Home';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <LogoSVG />
        {detailId ? (
          <PhotoCardWithQuery id={parseInt(detailId)} />
        ) : (
          <>
            <Switch>
              <Route path="/pet/:id" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
          </>
        )}
      </BrowserRouter>
    </>
  );
};
