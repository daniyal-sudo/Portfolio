import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import WhatAppIcon from '../Component/WhatAppIcon';
import BackToTop from '../Component/BackToTop';
import Footer from '../Component/Footer';
import About from '../Component/About';
import Services from '../Component/Services';
import HireMe from '../Component/HireMe';
import Portfolio from '../Component/Portfolio';
import Testimonials from '../Component/Testimonials';
import Pricing from '../Component/Pricing';
import Faq from '../Component/Faq';
import Contact from '../Component/Contact';
import DarkLightToggle from '../Component/DarkLightToggle';
import DarkBanner from '../Component/DarkBanner';
import FormTesting from '../Component/FormTesting';
import "aos/dist/aos.css";
import FiverrIcon from '../Component/FiverrIcon';


// useEffect(() => {
//   setTimeout(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, 100); // Small delay to ensure smooth scroll works properly
// }, []);

const Home = () => {
  return (
    <div className='main-wrapper'>
      {/* <FormTesting /> */}
          <DarkLightToggle />
      <div className='navbar-section'>
      <Header />
      </div>
      {/* <div className='banner-section'>
        <Banner />
      </div> */}
      <div className='darkbanner-section'>
        <DarkBanner />
      </div>
      <div className='about-section'>
        <About />
      </div>
      <div className='Service-section'>
       <Services />
      </div>
      <div className='portfolio-section'>
       <Portfolio />
      </div>
      <div className='hire-me-section'>
     <HireMe />
      </div>
      <div className='testimonial-section'>
      <Testimonials />
      </div>
      <div className='pricing-section'>
       <Pricing />
      </div>
      <div className='fag-section'>
       <Faq />
      </div>
      <div className='contact-section'>
       <Contact />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
      <div className='backtotop-section'>
       <BackToTop />
      </div>
      <div className='FiverrIcon'>
      <FiverrIcon />
      </div>
      <div className='WhattAppIcon-section'>
      <WhatAppIcon />
      </div>
    </div>
  );
};

export default Home;
