import React from "react";
import { Link, useParams } from "react-router-dom";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import { ApiTopProduct } from "../apifolder/TopProductsApi";

const ProductPage = () => {
  const { productId } = useParams();
  const product = ApiTopProduct.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3">
        {/* left side */}
        <div className="flex flex-1 items-center justify-center">
          {/* Render each product */}
          <Link to={`/products/${product.id}`} key={product.id}>
            <img
              src={product.src}
              alt={product.title}
              className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
            />
          </Link>
        </div>
        {/* right side */}
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-[50px] mb-[50px] mobile:items-center mobile:mt-[50px]">
          <h1 className="title text-[40px] mobile:text-[30px]">
            {product.title}
          </h1>
          <p className="pr-[4rem] text-justify mt-4 text-lg mobile:pr-0">
            {product.description}
          </p>
          <p className="mt-7 text-2xl">
            Price: <b>{product.price}</b>
          </p>
          {/* color variants */}
          <div className="flex gap-5 text-2xl mt-7">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer l-5 hover:border-[#8a4af3]"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer l-5 hover:border-[#8a4af3]"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer l-5 hover:border-[#8a4af3]"></div>
          </div>
          <div className="flex items-center mt-12">
            <Counter />
           <Link to="/card"><button className="button ml-[20px] hover:underline">Add To Cart</button> </Link> 
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
