import React from 'react';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px] mobile:hidden">Category</h1>
        <div className="flex items-center justify-between mt-3 mobile:flex-col">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled>
                Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <select className="ml-3 border-2 border-silver mobile:mt-3">
              <option selected disabled>
                Color
              </option>
              <option value="">Yellow</option>
              <option value="">Blue</option>
              <option value="">Red</option>
            </select>
          </div>
          <div className="flex mobile:flex-col">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-silver mobile:ml-0">
              <option value="newest">Newest (first)</option>
              <option value="oldest">Oldest (first)</option>
              <option value="price">Price (Ask)</option>
              <option value="price">Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
