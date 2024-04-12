// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <>
    <div class="navbar bg-gray-800">
  <a href="#home" class="text-white px-4 py-2">Home</a>
  <a href="#news" class="text-white px-4 py-2">News</a>
  <div class="dropdown">
    <button class="dropbtn text-white px-4 py-2 bg-transparent">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <div class="header bg-red-500 text-white py-4 px-6">
        <h2>Mega Menu</h2>
      </div>
      <div class="row">
        <div class="column w-1/3 p-4 bg-gray-300">
          <h3>Category 1</h3>
          <a href="#" class="text-black py-2 block">Link 1</a>
          <a href="#" class="text-black py-2 block">Link 2</a>
          <a href="#" class="text-black py-2 block">Link 3</a>
        </div>
        <div class="column w-1/3 p-4 bg-gray-300">
          <h3>Category 2</h3>
          <a href="#" class="text-black py-2 block">Link 1</a>
          <a href="#" class="text-black py-2 block">Link 2</a>
          <a href="#" class="text-black py-2 block">Link 3</a>
        </div>
        <div class="column w-1/3 p-4 bg-gray-300">
          <h3>Category 3</h3>
          <a href="#" class="text-black py-2 block">Link 1</a>
          <a href="#" class="text-black py-2 block">Link 2</a>
          <a href="#" class="text-black py-2 block">Link 3</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;






