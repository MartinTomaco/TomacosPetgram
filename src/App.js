import React from 'react';
import { Category } from './componets/Category';
import { ListOfCategories } from './componets/ListOfCategories';
import { GlobalStyle } from './GobalStyles';
import { PhotoCard } from './componets/PhotoCard';

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </>
);
