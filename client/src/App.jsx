import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Include other sections like news ticker, services, etc., here */}
      <NewsTicker />
      <Banner/>
      <Footer />
    </div>
  );
}

export default App;
