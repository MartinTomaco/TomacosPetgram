import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    window
      .fetch('https://petgram-server-martintomaco.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

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
    {renderList(true)}
    </>
  )
  
};
