import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Banner from '../components/home/Banner';
import Activities from '../components/home/Activities';
import FromTheDesk from '../components/home/FromTheDesk';
import Services from '../components/home/Services';
import Carousel from '../components/home/Carousel';
import Statistic from '../components/home/Statistic';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Activities />
      <FromTheDesk />
      <Services />
      <Statistic />
      <Carousel />
      <Footer />
    </>
  );
};

export default HomePage;
