import React from 'react';
import { Category } from './componets/Category';
import { ListOfCategories } from './componets/ListOfCategories';
import { GlobalStyle } from './GobalStyles';
import { ListOfPhotoCards } from './componets/ListOfPhotoCards';

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
);
