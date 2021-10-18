import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)

  if (error) {
    return <p>Internal Server Error: {error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}