import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login.js';
import Header from './Components/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Register from './Pages/Register.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
