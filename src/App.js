import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import CricketHighlights from './components/CricketHighlights';
import Reviews from './components/Reviews';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Facilities />
      <CricketHighlights />
      <Reviews />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
