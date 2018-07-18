import React from 'react';
import { Link } from 'react-router-dom';
import SportsDropdown from '../performers/sports_dropdown';
import MusicDropdown from '../performers/music_dropdown';


const NavBarCategories = () => (
  <ul className="categories">
    <li><SportsDropdown /></li>
    <li><MusicDropdown /></li>
    <li><Link className="sell-link" to="/venues">Venues</Link></li>
    <li><Link className="sell-link" to="/sell">Sell</Link></li>
  </ul>
);

export default NavBarCategories;
