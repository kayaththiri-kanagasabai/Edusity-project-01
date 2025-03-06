import React, { useState } from 'react'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Videoplayer from './components/Videoplayer/Videoplayer';



const App = () => {
 
  const[playState,setPlayState]=useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Ofter" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESITIMONIALS" title="what student says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
       <Videoplayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  );
};

export default App;