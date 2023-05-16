import React from 'react';
import { Link } from 'react-router-dom';
import { ApiTopProduct } from '../apifolder/TopProductsApi';
import Product from './Product';

const Products = () => {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
      <Link
        to='/category'
        className='text-[40px] text-center flex items-center justify-center w-[100%] hover:text-violet-600'
      >
        Categories
      </Link>
      {ApiTopProduct.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`} key={product.id}>
            <Product item={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;


