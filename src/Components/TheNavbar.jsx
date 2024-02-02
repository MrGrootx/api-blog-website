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
      <section className="bg-gray-50 ">
        <div className="container mx-auto p-5">
          <nav className=" md:px-6 px-2 py-2 bg-gray-300 rounded drop-shadow-md">
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
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default TheNavbar;

// console.log(fetch("https://dummyjson.com/posts").then(res => res.json()).then(data => console.log(data)));