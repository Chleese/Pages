import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className='menu'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
