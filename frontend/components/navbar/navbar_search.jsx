import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const NavbarSearchBox = () => {
  return (
    <form className="search-form-navbar">
      <div className="search-box-container-navbar">
        <i className="fas fa-search fa-sm"></i>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          placeholder="Search by team, artist, event, or venue" />
      </div>
    </form>
  );
};

export default NavbarSearchBox;
