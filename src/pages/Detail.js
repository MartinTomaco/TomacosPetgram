import React from 'react';
import { PhotoCardWithQuery } from '../componets/Containers/photoCardWithQuery';

export const Detail = (props) => {
    const {
        match: {
          params: { DetailId }
        }
      } = props
    // const DetailId = props.match.params.DetailId es igual
  return <PhotoCardWithQuery id={DetailId} />;
};
