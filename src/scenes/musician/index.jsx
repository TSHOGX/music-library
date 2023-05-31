import { useState } from "react";
import { Link } from "react-router-dom";

const MusicianRoot = ({ names }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <nav className="sticky z-20 top-0 flex flex-wrap items-center justify-between px-2 py-10 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-3xl font-semibold leading-relaxed inline-block mr-4 whitespace-nowrap">
              Musicians
            </span>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    navbarOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row lg:items-center list-none lg:ml-auto">
              <li>
                <Link
                  to="/about"
                  className="px-2 flex items-center font-medium hover:text-gray-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={window.location.origin}
                  className="px-2 flex items-center font-medium hover:text-gray-600"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Musician Cloud */}
      <ul className="container px-12 md:px-40 mx-auto flex flex-row flex-wrap sm:justify-center text-lg font-semibold text-gray-800 divide-x divide-border gap-4 cursor-pointer">
        {names.map((name, i) => (
          <li className="px-2 hover:text-gray-600">
            <Link to={"/musicians/" + name}>{name.replace(/_/g, " ")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicianRoot;
