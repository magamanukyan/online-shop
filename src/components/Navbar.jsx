import { Search, ShoppingCart } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const style = 'text-[16px] cursor-pointer ml-[25px] mobile:ml-[10px] hover:underline hover:text-red-600'

  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center
      mobile:pl-0 mobile:pr-0">
       
        {/* left side */}
        <div className="left flex flex-1 items-center ">
          <div className="language cursor-pointer text-[16px] mobile:hidden ">En</div>
          <div className="searchInput flex border-[2px] border-solid border-lightgrey items-center rounded-md ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input
              className="input outline-none mobile:w-[50px]"
              type="text"
              placeholder="Search"
            />
            <Search className="text-[16px]" />
          </div>
        </div>

        <div className="flex-1 center text-center ">
          <Link to = '/' className="logo font-bold text-lg mobile:text-sm">Summer Kings</Link>
        </div>

        {/* Right side */}
        <div className="right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center">
          <Link to="/register" className={style}> Register </Link>
          <Link to="/login" className={style}>Sign in</Link>
         <Link to="/card"> <div className={style} >
            <Badge badgeContent={2} color="primary">
            <ShoppingCart color="action" />
          </Badge>
          </div>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
