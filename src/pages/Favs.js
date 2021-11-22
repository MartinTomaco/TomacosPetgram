import React from 'react'
import { ListOfFavs } from '../componets/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'

export const Favs = () => {
    const { loading, error, data } = useGetFavorites();
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    const { favs } = data;
    return (
        <ListOfFavs favs={favs}/>
    )
}
