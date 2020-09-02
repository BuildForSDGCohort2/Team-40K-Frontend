import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Navlist from './Navlist';

const NavBar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [search, setsearch] = useState(false);
  return (
    <nav className="my-navbar">
      <div className="brand"></div>
      <div className="right w-100">
        <div
          className={
            isNavOpen ? 'toggler mt-1 ml-2 mr-1 open' : 'toggler mt-1 ml-2 mr-2'
          }
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className="center">
        <Navlist />
        {search ? <SearchBar setsearch={setsearch} /> : null}
      </div>
    </nav>
  );
};

export default NavBar;