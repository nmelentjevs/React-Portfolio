import React, { useState } from 'react';

function Navbar(props) {
  const [page, setPage] = useState('welcome');
  const [open, setOpen] = useState(false);

  const changePage = page => {
    props.setPage(page);
    setPage(page);
  };

  return (
    <aside>
      {' '}
      <div
        onClick={() => setOpen(!open)}
        className={open ? 'menu-toggler open' : 'menu-toggler'}
      >
        <div className="bar half start" />
        <div className="bar" />
        <div className="bar half end" />
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li
            className="nav-item"
            style={{
              color: page === 'welcome' ? '#fd57bf' : 'black'
            }}
            onClick={() => changePage('welcome')}
          >
            Welcome
          </li>
          <li
            style={{
              color: page === 'projects' ? '#fd57bf' : 'black'
            }}
            className="nav-item"
            onClick={() => changePage('projects')}
          >
            Projects
          </li>
          <li
            style={{
              color: page === 'about' ? '#fd57bf' : 'black'
            }}
            className="nav-item"
            onClick={() => changePage('about')}
          >
            About
          </li>
          <li
            style={{
              color: page === 'contact' ? '#fd57bf' : 'black'
            }}
            className="nav-item"
            onClick={() => changePage('contact')}
          >
            Contact{' '}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
