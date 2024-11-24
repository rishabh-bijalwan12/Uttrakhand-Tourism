import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import CardSlider from './components/PopularPlaces';
import PopularSectionDescription from './components/PopularSectionDescription';
import Activities from './components/Activities';
import ActivitiesSectionDescription from './components/ActivitiesSectionDescription';
import Footer from './components/Footer';
import About1 from './components/About1';
import Quary1 from './components/Quary1';
import TempleInfo from './components/TempleInfo';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardSlider />} />
          <Route path="/popular-description" element={<PopularSectionDescription />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Activities />} />
          <Route path="/Activities-description" element={<ActivitiesSectionDescription />} />
          <Route path="/about" element={<About1/>} />
          <Route path="/query" element={<Quary1/>} />
          <Route path="/Temple-Info" element={<TempleInfo/>} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
