import React from 'react';
import { Category } from './componets/Category';
import { ListOfCategories } from './componets/ListOfCategories';
import { GlobalStyle } from './styles/GobalStyles';
import { ListOfPhotoCards } from './componets/ListOfPhotoCards';
import { LogoSVG } from './componets/LogoSVG';

export const App = () => (
  <>
    <GlobalStyle />
    <LogoSVG/>
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
