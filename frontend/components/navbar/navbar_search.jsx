import React from 'react';

const NavbarSearchBox = () => {
  return (
    <form className="search-form-navbar">
      <div className="search-box-container-navbar">
        <input type="text" placeholder="Search by team, artist, event, or venue"></input>
      </div>
    </form>
  );
};

export default NavbarSearchBox;
