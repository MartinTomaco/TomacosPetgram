import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  TextBlock,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders';
import { PhotoCard } from '../PhotoCard';
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto';

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id);

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

  if (error) {
    return <p>Internal Server Error: {error.message}</p>;
  }

  const photo = data || {}; //Si aún data es undefined le asigno un objeto vacio

  return (
    <ReactPlaceholder
      ready={!loading}
      showLoadingAnimation={true}
      customPlaceholder={photoCardSkeleton}
    >
      {!data ? (
        <></>
      ) : (
        <PhotoCard
          id={data.photo.id}
          likes={data.photo.likes}
          src={data.photo.src}
          loading={loading}
        />
      )}
    </ReactPlaceholder>
  );
};
