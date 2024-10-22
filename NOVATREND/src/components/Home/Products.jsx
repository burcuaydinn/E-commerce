import React from 'react';
import BestsellerProducts from './BestsellerProducts'; 

const Products = () => {
  
  const productData = [
    { id: 1, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 2, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 3, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 4, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 5, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 6, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 7, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 8, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 9, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
    { id: 10, name: 'Graphic Design', description: 'English Department', price: '$6.48' },
  ];

  return (
    <div>
      <BestsellerProducts products={productData} /> 
    </div>
  );
};

export default Products;
