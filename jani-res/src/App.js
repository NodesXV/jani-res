import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
