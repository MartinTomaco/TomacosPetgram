import React from 'react';
import { useGetPhotos } from '../../hooks/useGetPhotos';

import { PhotoCard } from '../PhotoCard';
import { List } from './styles';


export const ListOfPhotoCards = ({ categoryId }) => {


  const { loading, error, data } = useGetPhotos(categoryId);
  
  if (error) {
    return <p>Internal Server Error: {error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  );

};
