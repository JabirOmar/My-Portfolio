import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/animations.css";

export default function TopBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className=" absolute top-0 left-0 w-full py-4 px-[4%] flex justify-between items-center">
      {/*  */}
      <section className=" nav_logo flex items-center justify-center">
        <NavLink to={"/"}>
          <p className=" relative logo px-5 font-semibold text-center text-2xl text-[#ffe44a]">
            Jabir
          </p>
        </NavLink>
      </section>

      <section></section>

      <section>
        <div className=" nav_menu menu cursor-pointer border border-[#ffd700] p-4 rounded-md">
          <span className=" bar"></span>
        </div>

        <div className=" absolute bg-green-400 hidden">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </nav>
  );
}
