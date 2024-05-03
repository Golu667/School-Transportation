import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Component/Home';
import BusStop from './Component/BusStop';
import BusRoutes from './Component/BusRoutes';
import Buses from './Component/Buses';
import Contact from './Component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router> 
      <Navbar />
       <Routes>
        <Route  path='/' element = {<Home/>}/>
        <Route  path='/BusStop' element = {<BusStop/>}/>
        <Route  path='/BusRoutes' element = {<BusRoutes/>}/>
        <Route  path='/Buses' element = {<Buses/>}/>
        <Route  path='/Contact' element = {<Contact/>}/>
       </Routes>
      </Router>
   
    </>
  );
}

export default App;
