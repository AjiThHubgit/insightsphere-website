import React from 'react'
import Blogs from './sections/Blogs';
import HeroSection from './sections/HeroSection';
import Testimonial from './sections/Testimonial';
import Service from './sections/Service';
import VideoSection from './sections/VideoSection';
import WebsiteOverview from './sections/WebsiteOverview';
import Footer from './sections/Footer';
import VideoPopupSection from './sections/VideoPopupSection';

function Home() {
  return (
    <>
        <HeroSection />
        <VideoPopupSection />
        <Service />
        <WebsiteOverview />
        <Blogs />
        <Testimonial />
        <VideoSection />
        <Footer />

        
    </>
  )
}

export default Home