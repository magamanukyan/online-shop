import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';

const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState('opacity-0');
  const navigate = useNavigate();

  const handleHoverEnter = () => {
    setHoverEffect(`opacity-1 bg-[rgba(0,0,0,0.2)]`);
  };
  const handleHoverExit = () => {
    setHoverEffect(`opacity-0`);
  };

  const handleClick = () => {
    navigate(`/products/${item.id}`);
  };
  

  const iconStyle =
    'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100';

  return (
    <div
      className="flex items-center justify-center w-[400px] min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
      onClick={handleClick}
    >
      <img className="w-[100%]" src={item.src} alt="product" />
      <div
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute gap-5 duration-100` +
          hoverEffect
        }
      >
        {/* icons */}
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;



