import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home';
import About from './Components/About';
import Services from './Components/Services';
import Events from './Components/Events';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Testimonals from './Components/Pages/Testimonal';
import Blog from './Components/Pages/Blog';
import Team from './Components/Pages/Team';
import Reservation from './Components/Reservation';
import Login from './Components/Login';
import NotFound from './NotFound';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonial" element={<Testimonals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;