import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const activeStyle = { color: "#424242", fontWeight: "bold" };
  return (
    <div className='menu'>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            About Me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
