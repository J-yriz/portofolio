"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CloseIcon } from "@/utility/Icons";
import useWindowWidth from "@/utility/windowWitdh";

const NavObj = {
  "#about": "about",
  "#skills": "skills",
  "#project": "project",
  "#contact": "contact",
};

const NavDirect = ({ setNavPhone }: { setNavPhone: React.Dispatch<boolean> }) => (
  <>
    {Object.entries(NavObj).map(([path, value], index) => (
      <Link
        onClick={() => {
          setNavPhone(false);
        }}
        key={index}
        href={path}
        className="hover:text-huntCyan transition-colors"
      >
        {value.toUpperCase()}
      </Link>
    ))}
  </>
);

const Navbar = () => {
  const windowWidth = useWindowWidth();
  const [navPhone, setNavPhone] = useState<boolean>(false);

  useEffect(() => {
    if (windowWidth > 640) {
      setNavPhone(false);
      document.body.style.overflow = "auto";
    }
  }, [windowWidth]);

  useEffect(() => {
    if (navPhone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navPhone]);

  return (
    <nav className={`bg-huntBlack sticky top-0 py-5 ${navPhone ? "z-50" : "z-40"}`}>
      <div className="hidden sm:flex space-x-5 items-center justify-center container mx-auto">
        <NavDirect setNavPhone={setNavPhone} />
      </div>
      <div className="sm:hidden flex items-center justify-between px-5">
        {windowWidth <= 640 && <p className="font-semibold text-2xl">JARIZ</p>}
        <button
          onClick={() => {
            setNavPhone(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {navPhone && (
        <div className="fixed sm:hidden show top-0 bg-huntBlack w-full h-full">
          <button onClick={() => setNavPhone(false)} className="block w-10 h-10 absolute bg-huntWhite top-5 right-5 rounded-md">
            <CloseIcon />
          </button>
          <div className="flex flex-col m-5 space-y-1 h-full">
            <NavDirect setNavPhone={setNavPhone} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
