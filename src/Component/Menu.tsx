import React from "react";
import { useState } from "react";

export default function Menu() {
  const activeStyle = { color: "#424242" };
  const [activeItem, setActiveItem] = useState<string | null>("home");

  return (
    <div className='menu'>
      <ul>
        <li
          style={activeItem === "home" ? activeStyle : undefined}
          onClick={() => setActiveItem("home")}>
          首页
        </li>
        <li
          style={activeItem === "project" ? activeStyle : undefined}
          onClick={() => setActiveItem("project")}>
          项目经历
        </li>
        <li
          style={activeItem === "me" ? activeStyle : undefined}
          onClick={() => setActiveItem("me")}>
          关于我
        </li>
      </ul>
    </div>
  );
}
