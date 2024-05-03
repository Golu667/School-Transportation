import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { TbBusStop } from "react-icons/tb";
import { LiaRouteSolid } from "react-icons/lia";
import { FaBusAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className='navbar'> 
        <h3 className='logo'>School Bus Transportation </h3>
        <ul className= {isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}>
        
            <Link to = "/" className='home'>
                <li> <FaHome /> Home</li>
            </Link>
            <Link to = "/BusStop" className='BusStop'>
                <li> <TbBusStop /> BusStop</li>
            </Link>
            <Link to = "/BusRoutes" className='BusRoutes'>
                <li> <LiaRouteSolid /> BusRoutes</li>
            </Link>
            <Link to = "/Buses" className='Buses'>
                <li> <FaBusAlt /> Buses</li>
            </Link>
            <Link to = "/"Contact className='Contact'>
                <li> <GrContact /> Contact</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'>
           {isMobile ? <i className='fas fa-times'></i>
           :  <i className='fas fa-bars'></i>}
        </button>
    </nav>
  )
}

export default Navbar