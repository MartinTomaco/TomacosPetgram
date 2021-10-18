import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)

  if (error) {
    return <h2>Internal Server Error: {error.message}</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}