import React from 'react';
import Banner from '../component/Banner';
import Blog from '../component/Blog';
import Collection from '../component/collection';
import Footer from '../component/Footer';
import Girlbanner from '../component/Girlbanner';
import Glassproduct from '../component/Glassproduct';
import Logosection from '../component/Logosection';
import Navbar from '../component/Navbar';
import Product from '../component/Product';
import Shipping from '../component/Shipping';
import Tagline from '../component/Tagline';
import Top from '../component/Top';

const Home = () => {
    return (
        <div>
               <Top></Top>
      <Navbar></Navbar>
      <Banner></Banner>
      <Tagline></Tagline>
      <Collection></Collection>
      <Product></Product>
      <Logosection></Logosection>
      <Glassproduct></Glassproduct>
      <Girlbanner></Girlbanner>
      <Blog></Blog>
      <Shipping></Shipping>
     <Footer></Footer>
        </div>
    );
};

export default Home;