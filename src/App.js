
import React from 'react';
import './App.scss';
import {About, Footer, Header, Skills, Testimonial, Work} from './container';
import {Navbar} from './components';

function App() {
  return (
 <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <About />   
      <Testimonial />
      <Footer />
      
    </div>
  );
}

export default App;
