import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Studio from '../components/Studio';
import Influence from '../components/Influence';
import Community from '../components/Community';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <Studio />
        <Influence />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
