import React, { useState, useEffect } from 'react';
import animateCSS from '../animate';
import SearchBar from './SearchBar';
import Navlist from './Navlist';
import './NavBar.css';
import Brand from './Brand';

const NavBar = ({ bg, barColor }) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [search, setsearch] = useState(false);
  const toggleSearch = () => {
    setsearch(!search);
  };
  useEffect(() => {
    if (isNavOpen) {
      animateCSS('.drop-navlist', 'fadeInDown');
    } else {
      animateCSS('.drop-navlist', 'fadeOutUp');
    }
  }, [isNavOpen]);
  return (
    <>
    <nav className={`my-navbar ${bg || ''}`}>
      <div className="top-nav">
        <div className="brand">
          <Brand/>
        </div>
        <div className="right w-100">
            <div
              className={
                isNavOpen ? 'mytoggler mt-1 ml-2 mr-1 open' : 'mytoggler mt-1 ml-2 mr-2'
              }
              onClick={() => setisNavOpen(!isNavOpen)}
            >
              <div className={`bar1 ${barColor || ''}`}></div>
              <div className={`bar2 ${barColor || ''}`}></div>
              <div className={`bar3 ${barColor || ''}`}></div>
            </div>
        </div>
        <div className="center">
          <Navlist isNavOpen={isNavOpen} toggleSearch={toggleSearch} />
        </div>
      </div>
    </nav>
    {search ? <SearchBar toggleSearch={toggleSearch} search={search} /> : null}
    </>
  );
};

export default NavBar;
