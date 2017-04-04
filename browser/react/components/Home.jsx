// Required libraries
import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome to OtterMe!</h1>
      <span>Menu</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/otters">All the otters</Link>
        </li>
      </ul>
      { props.children }
    </div>
  );
};

export default Home;
