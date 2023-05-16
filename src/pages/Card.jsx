import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Counter from '../components/Counter'

const Card = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-5xl">Card</div>
        <div className="flex items-center justify-between mt-4 tablet:flex-col tablet:mt-0 mobile:flex-col mobile:mt-0">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-[#8a4af3] hover:text-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3">
            <p>Items in your Card:2</p>
            <p className="ml-5">Whishlist item:0</p>
          </div>
          <button className="btn">Checkout </button>
        </div>
        {/* Center */}
        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1">
            {/* list of products */}
            <div className="flex w-[100%] h-auto items-center tablet:flex-col mobile:flex-col">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://img.faballey.com/images/Product/DRS04479Z/2.jpg"
                  alt="product"
                />
                <div className="descroption flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Pink dress
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div
                      className="rounded-full border-2 p-[10px] cursor-pointer bg-pink-300 ml-1 w-[20px] h-[20px
                                ]"
                    ></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>md
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto tablet:mt-4 mobile:mt-3">
              <Counter/>
              <p className="flex items-center justify-center text-4xl mt-3">
                <b>$40</b>
              </p>
                </div>
            </div>
            <hr className="mt-7 mb-7"/>

            {/* 2nd product */}
            <div className="flex w-[100%] h-auto items-center tablet:flex-col tablet:justify-start mobile:flex-col">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://img.faballey.com/images/Product/DRS04287Z/2.jpg"
                  alt="product"
                />
                <div className="descroption flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Long dress
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div
                      className="rounded-full border-2 p-[10px] cursor-pointer bg-gray-300 ml-1 w-[20px] h-[20px
                                ]"
                    ></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>md
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto tablet:mt-4 mobile:mt-3">
              <Counter/>
              <p className="flex items-center justify-center text-4xl mt-3">
                <b>$40</b>
              </p>
                </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className="flex-[0.4] p-5 w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Subtotal</p>
                <p>$80</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping</p>
                <p>$20</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping discount</p>
                <p>-$20</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
                <p>Total</p>
                <p>$80</p>
            </div>
          </div>
        </div> 
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Card;
