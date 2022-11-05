import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../src/site-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#2c6698");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#2c6698");
        setTextColor("#000000");
      } else {
        setColor("#2c6698");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="absolute left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[100%] m-auto flex justify-between items-center p-4 text-black">
        <Link href="/">
          <Image src={logo} />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 font-bold text-[22px]">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 font-bold text-[22px]">
            <Link href="/project">Projects</Link>
          </li>
          <li className="p-4 font-bold text-[22px]">
            <Link href="/publish">Publish</Link>
          </li>
          <li className="p-4 font-bold text-[22px]">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#2c6698] text-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#2c6698] text-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 font-bold hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 font-bold hover:text-gray-500"
            >
              <Link href="/#gallery">Projects</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 font-bold hover:text-gray-500"
            >
              <Link href="/work">Publish</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 font-bold hover:text-gray-500"
            >
              <Link href="/contact">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
