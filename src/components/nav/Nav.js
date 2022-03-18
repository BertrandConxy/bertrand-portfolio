import React from 'react';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark, BiMessageSquareDetail } from "react-icons/bi";
import {RiServiceLine} from 'react-icons/ri';
import { useState } from 'react';
import './nav.css';

function Nav() {
  const [activeNav, setActiveNav] =useState('#');
  const setActive = (path) => {
    setActiveNav(path)
  }
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
