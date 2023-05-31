import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <nav className="sticky z-20 top-0 flex flex-wrap items-center justify-between px-2 py-10 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-3xl font-semibold leading-relaxed inline-block mr-4 whitespace-nowrap">
              About
            </span>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                class="h-6 w-6"
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

      {/* Body */}
      <div className="container px-12 mx-auto">
        <p className="mb-4 font-medium text-gray-700">
          It is my personal classical music collection.
        </p>
        <p className="mb-4 font-medium text-gray-700">
          <span className="underline underline-offset-4 decoration-2 decoration-blue-400">
            <Link to="/">Homepage</Link>
          </span>{" "}
          listed all the musicians I interested.
        </p>
        <p className="mb-4 font-medium text-gray-700">
          Click musician name to view the{" "}
          <span className="underline underline-offset-4 decoration-2 decoration-blue-400">
            <Link to="/musicians">musician</Link>
          </span>{" "}
          page, which listed events and opus in timeline style.
        </p>
        <h2 className="mb-4 font-medium text-gray-700">
          Naming conventions: Name no. # in K major, op. # no.#, C.#, CC.#,
          “Nickname”
        </h2>
        <ul className="mb-4 font-medium text-gray-700">
          <li>
            Musician's events are summarized by ChatGPT according to the
            wikipedia, so:
            <ul className="ml-6 list-disc">
              <li>
                The generated events are not verified and accuracy is not
                guaranteed.
              </li>
              <li>The included music is not comprehensive.</li>
            </ul>
          </li>
        </ul>
        <h2 className="mt-8 mb-4 text-xl font-bold">Naming Conventions</h2>
        <p className="mb-4 font-medium text-gray-700">
          Music title following format defined by{" "}
          <span className="underline underline-offset-4 decoration-2 decoration-blue-400">
            <a
              href="https://github.com/openopus-org/openopus_api/blob/master/STYLE.md"
              target="blank"
            >
              openopus
            </a>
          </span>
          :{" "}
        </p>
        <code className="font-medium text-gray-700">
          `Name no. # in K major, op. # no. #, C.#, CC.#, “Nickname”`
        </code>
        <p className="mt-8 mb-4 font-medium text-gray-700">Thanks!</p>
      </div>
    </div>
  );
};

export default About;
