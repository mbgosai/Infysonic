/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ServicePage from './components/ServicePage';
import HowWeWork from './components/HowWeWork';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { Helmet } from 'react-helmet-async';

function HashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Infysonic | Enterprise IT & Software Development Services</title>
        <meta name="description" content="Infysonic is a premier US-based IT consulting and software development company located in Massachusetts, delivering scalable digital solutions." />
      </Helmet>
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <HashScroll />
        <Layout>
          <RoutesWrapper />
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

function RoutesWrapper() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage key={location.pathname} />} />
      <Route path="/services/:id" element={<ServicePage key={location.pathname} />} />
      <Route path="/how-we-work" element={<HowWeWork key={location.pathname} />} />
      <Route path="/contact" element={<Contact key={location.pathname} />} />
      <Route path="*" element={<HomePage key="fallback" />} />
    </Routes>
  );
}

