import React from 'react';
import OnePageNavbar from '@/components/Layout/OnePageNavbar';
import AboutUs from '@/components/HomePages/OnePageDemo/AboutUs';
import ServicesSlider from '@/components/HomePages/OnePageDemo/ServicesSlider';
import ServicesTab from '@/components/HomePages/OnePageDemo/ServicesTab';
import FunFacts from '@/components/HomePages/OnePageDemo/FunFacts';
import JoinClients from '@/components/HomePages/OnePageDemo/JoinClients';
import HowItWorks from '@/components/HomePages/OnePageDemo/HowItWorks';
import TeamSlider from '@/components/HomePages/OnePageDemo/TeamSlider';
import Testimonials from '@/components/HomePages/OnePageDemo/Testimonials';
import FaqContent from '@/components/HomePages/OnePageDemo/FaqContent';
import Pricing from '@/components/HomePages/OnePageDemo/Pricing';
import Partners from '@/components/HomePages/OnePageDemo/Partners';
import SubscribeForm from '@/components/HomePages/OnePageDemo/SubscribeForm';
import Footer from '@/components/Layout/Footer';
import VideoMain from '@/components/HomePages/VideoMain';
import MainBanner from '@/components/HomePages/MainBanner';
import Features from '@/components/Common/Features';
import { Button } from '@nextui-org/react';
import FlyingComponent from '@/components/FlyingComponent';

export default function Index8() {
  return (
    <div className="bg-white dark:bg-black p-2">
      <OnePageNavbar />
      <FlyingComponent />
      <VideoMain />

      <MainBanner />

      <Features />

      <AboutUs />

      {/* <ServicesSlider /> */}

      <ServicesTab />

      <FunFacts />

      <JoinClients />

      <HowItWorks />

      {/* <TeamSlider /> */}

      <Testimonials />

      <FaqContent />

      {/* <Pricing /> */}

      <Partners />

      <SubscribeForm />

      <Footer />
    </div>
  );
}
