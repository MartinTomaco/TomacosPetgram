import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(function () {
    setLoading(true);
    window
      .fetch('https://petgram-server-martintomaco.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();

  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed != newShowFixed && setShowFixed(newShowFixed);
        // si showFixed es diferente ejecuta el metodo para actualizarlo
      };
      document.addEventListener('scroll', onScroll); //cada vez que se haga un scrool ejecuto el metodo
      return () => document.removeEventListener('scroll', onScroll); // en el return elimino el listener para evitar memory leak
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
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
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(showFixed)}
    </>
  );
};
