import React from 'react';
import Hero from '../components/Hero';
import AboutDoctor from '../components/AboutDoctor';
import Specialties from '../components/Specialties';
import WhyChoose from '../components/WhyChoose';
import CabinetGallery from '../components/CabinetGallery';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <Specialties />
      <WhyChoose />
      <CabinetGallery />
      <Reviews />
      <FAQ />
      <Location />
      <CTASection />
    </>
  );
}
