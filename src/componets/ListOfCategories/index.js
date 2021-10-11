import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {

  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    window
      .fetch('https://petgram-server-martintomaco.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  useEffect(function () {
    const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        showFixed != newShowFixed && setShowFixed(newShowFixed)
        // si showFixed es diferente ejecuta el metodo para actualizarlo
    }
    document.addEventListener('scroll', onScroll) //cada vez que se haga un scrool ejecuto el metodo
    return() => document.removeEventListener('scroll',onScroll) // en el return elimino el listener para evitar memory leak
  },[showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category
            /* cover = {category.cover} 
                 path = {category.path}
                 emoji = {category.emoji} 
                 Podemos hacer eso o 
                 usar el spread operator */
            {...category}
          />
        </Item>
      ))}
    </List>
  );

  return (
    <>
    {renderList()}
    {showFixed && renderList(showFixed)}
    </>
  )
  
};
