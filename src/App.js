import React from 'react';
import { Category } from './componets/Category';
import { ListOfCategories } from './componets/ListOfCategories';
import { GlobalStyle } from './styles/GobalStyles';
import { ListOfPhotoCards } from './componets/ListOfPhotoCards';
import { LogoSVG } from './componets/LogoSVG';
import { PhotoCardWithQuery } from './componets/Containers/photoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <LogoSVG />
      {detailId ? (
        <PhotoCardWithQuery id={detailId}/>
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  );
};
