
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import UpButton from "../components/unique/UpButton";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Acceuil from "../components/pages/Acceuil";
import Menu from "../components/pages/Menu";
import Propos from "../components/pages/Propos";
import Contact from "../components/pages/Contact";

export function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Acceuil/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/propos' element={<Propos/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <UpButton/>
      <Footer/>
      
    </Router>
  );
}

export default App;
