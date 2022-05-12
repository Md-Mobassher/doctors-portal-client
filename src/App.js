import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appointment/Appoinment';
import ContactUs from './Pages/Contact Us/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className='px-12 mx-auto  ' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='appoinment' element={<Appoinment />}></Route>
        <Route path='reviews' element={<Reviews />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<ContactUs />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
