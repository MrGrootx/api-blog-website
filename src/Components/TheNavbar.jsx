import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const TheNavbar = () => {
  const [nav, setNav] = useState(false);
  // console.log(nav);
  const navLinks = [
    {
      id: 1,
      navbar: "home",
    },
    {
      id: 2,
      navbar: "about",
    },
    {
      id: 3,
      navbar: "contact",
    },
  ];

  return (
    <>
      <section className=" ">
        <div className="container mx-auto md:p-5 ">
          <nav className=" md:px-6 px-2 md:py-5 py-2 bg-gray-300 md:rounded drop-shadow-md p-1">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-Pacifico text-xl">Groot Blog</h3>
              </div>

              <div className=" hidden md:block">
                <ul className="md:flex gap-x-3 cursor-pointer">
                  {navLinks.map(({ id, navbar }) => (
                    <NavLink
                      className="active:text-red-500"
                      to={navbar}
                      key={id}
                    >
                      <li className="text-[#1D2B53] hover:text-gray-500 capitalize ">
                        {navbar}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>

              {/* Responsive Navbar */}
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer md:pr-4 z-10 text-gray-500 md:hidden "
              >
                {nav ? (
                  <FaTimes size={20} className="" />
                ) : (
                  <FaBars size={20} />
                )}
              </div>

              {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-11 left-0 w-full h-screen bg-gray-600 text-gray-500 ">
                  {navLinks.map(({ id, navbar }) => (
                    <li
                      key={id}
                      className="px-4 cursor-pointer capitalize py-6 text-2xl "
                    >
                      <NavLink onClick={() => setNav(!nav)} to={navbar}>
                        {navbar}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default TheNavbar;

// console.log(fetch("https://dummyjson.com/posts").then(res => res.json()).then(data => console.log(data)));
