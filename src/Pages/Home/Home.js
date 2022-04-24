import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header'

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Carousel></Carousel>
          <Gallery></Gallery>
        </div>
    );
};

export default Home;