
import React from 'react';
import Collection from '../component/collection';
import Footer from '../component/Footer';
import Girlbanner from '../component/Girlbanner';
import Info from '../component/Info';
import Logosection from '../component/Logosection';
import Navbar from '../component/Navbar';
import Product from '../component/Product';
import Top from '../component/Top';

const About = () => {
    return (
        <div>
          <Top></Top>
          <Navbar></Navbar>
          <Info></Info>
        <Collection></Collection>
          <Girlbanner></Girlbanner>
          <Logosection></Logosection>
          <Footer></Footer>
        </div>
    );
};

export default About;