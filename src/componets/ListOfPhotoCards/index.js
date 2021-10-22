import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  TextBlock,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders';

import { useGetPhotos } from '../../hooks/useGetPhotos';
import { PhotoCard } from '../PhotoCard';
import { List } from './styles';

export const ListOfPhotoCards = ({ categoryId }) => {
  const photoCardSkeleton = (
    <React.Fragment>
      <RectShape color="#eee" style={{ height: '281px', marginBottom: 10 }} />
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  );

  const { loading, error, data } = useGetPhotos(categoryId);

  if (error) {
    return <p>Internal Server Error: {error.message}</p>;
  }


  const photoData = data || {photos:[]} //Si aún no inicializo data le paso un objeto con la propiedad photos con arreglo vacio

  return (
    <ReactPlaceholder
      ready={!loading}
      showLoadingAnimation={true}
      customPlaceholder={photoCardSkeleton}
    >
      <List>
        {photoData.photos.map((photo) => (
          <PhotoCard {...photo} key={photo.id}/>
        ))}
      </List>
    </ReactPlaceholder>
  );
};
