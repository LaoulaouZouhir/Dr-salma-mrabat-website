import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Cabinet de Dermatologie Dr Samia Mrabat',
    image: 'https://drsamiamrabatdermatologue.com/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'N° 5, 2e étage, Bureaux Reda, Rue Benzerte, Bd Allal Ben Abdallah',
      addressLocality: 'Meknès',
      postalCode: '50000',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.8951',
      longitude: '-5.607456',
    },
    url: 'https://drsamiamrabatdermatologue.com',
    telephone: '+212535524067',
    priceRange: '$$',
    medicalSpecialty: 'Dermatology',
    openingHours: 'Mo-Fr 09:00-18:00 Sa 09:00-13:00',
  };

  return (
    <div className="home-page">
      <SEO
        title="Dr Samia Mrabat — Dermatologue à Meknès | Dermatologie médicale, esthétique et chirurgicale"
        description="Cabinet de dermatologie du Dr Samia Mrabat à Meknès. Consultations en dermatologie médicale, pédiatrique, esthétique et chirurgie dermatologique pour adultes et enfants."
        keywords="Cabinet dermatologique à Meknès, Dermatologue Meknès, Consultation dermatologique Meknès, Dermatologie médicale Meknès, Dermatologie esthétique Meknès, Chirurgie dermatologique Meknès"
        url="https://drsamiamrabatdermatologue.com"
        jsonLd={schemaData}
      />

      <Hero />
      <AboutDoctor />
      <Specialties />
      <WhyChoose />
      <CabinetGallery />
      <Reviews />
      <FAQ />
      <Location />
      <CTASection />
    </div>
  );
}
