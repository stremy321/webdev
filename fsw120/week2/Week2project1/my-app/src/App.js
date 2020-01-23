import React from 'react';

import Navbar from "./navbar";
import Header from "./header";
import Blog from "./blog";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Blog title="Man must explore, and this is exploration at its greatest" subtitle="Problems look mighty small from 150 miles up" author="Start Bootstrap" date=" September 24, 2019"/>
      <Blog title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." author="Start Bootstrap" date="September 18, 2019"/>
      <Blog title="Science has not yet mastered prophecy" subtitle="We predict too much for the next year and yet far too little for the next ten." author="Start Bootstrap" date="August 24, 2019"/>
      <Blog title="Failure is not an option" subtitle="Many say exploration is part of our destiny, but it's actually our duty to future generations." author="Start Bootstrap" date="July 8, 2019"/>
      <Footer />
      
      
    </div>
  );
}

export default App;
