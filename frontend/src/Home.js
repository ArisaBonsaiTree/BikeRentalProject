// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/create-reservation">Create Reservation</Link>
        </li>
        <li>
          <Link to="/edit-reservation">Edit Reservation</Link>
        </li>
        <li>
          <Link to="/view-reservation">View Reservation</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

