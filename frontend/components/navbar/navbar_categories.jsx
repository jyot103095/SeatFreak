import React from 'react';
import { Link } from 'react-router-dom';

const NavBarCategories = () => (
  <ul className="categories">
    <li>Sports</li>
    <li>Music</li>
    <li><Link to="/sell">Sell</Link></li>
  </ul>
);

export default NavBarCategories;
