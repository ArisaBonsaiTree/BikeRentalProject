import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-reservation">Create Reservation</Link>
        </li>
        <li>
          <Link to="/edit-reservation">Edit Reservation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
