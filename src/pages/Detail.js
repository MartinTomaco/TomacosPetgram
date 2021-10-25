import React from 'react';
import { PhotoCardWithQuery } from '../componets/Containers/photoCardWithQuery';

export const Detail = (props) => {
    const {
        match: {
          params: { DetailId }
        }
      } = props
  return <PhotoCardWithQuery id={DetailId} />;
};
