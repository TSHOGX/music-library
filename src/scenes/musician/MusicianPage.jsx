import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PianoIcon from "@mui/icons-material/Piano";
import HouseIcon from "@mui/icons-material/House";

const MusicianPage = () => {
  const { id } = useParams();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [works, setWorks] = useState(null);
  const [name, setName] = useState(null);

  // const item = data.filter((item) => item.name === name);
  // const timestamps = item[0].timestamps;
  // const wikipedia = item[0].wikipedia;

  // const sortedTimestamps = timestamps.sort(
  //   (a, b) => parseInt(a.year) - parseInt(b.year)
  // );

  // const [isClicked, setIsClicked] = useState(null);
  // const handleClick = (name) => {
  //   console.log(name);
  //   setIsClicked(name);
  // };

  // {title, subtitle, searchterms, popular, recommended, id, genre}
  useEffect(() => {
    async function fetchData(id) {
      try {
        await fetch(
          "https://api.openopus.org/work/list/composer/" +
            id +
            "/genre/all.json"
        )
          .then((response) => response.json())
          .then((d) => {
            setWorks(d.works);
            setName(d.composer.name);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(id);
  }, []);

  if (works === null || name === null) {
    return (
      <div className="flex justify-center items-center h-screen text-6xl font-bold">
        Fetching data...
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <nav className="sticky z-20 top-0 flex flex-wrap items-center justify-between px-2 py-10 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-3xl font-semibold leading-relaxed inline-block mr-4 whitespace-nowrap">
              {name.replace(/_/g, " ")}
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
                  to="/musicians"
                  className="px-2 flex items-center font-medium hover:text-gray-600"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  to={"wikipedia"}
                  className="px-2 flex items-center font-medium hover:text-gray-600"
                >
                  Wiki
                </Link>
              </li>
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
      <div className="container max-w-[90%] px-12 mx-auto flex flex-row">
        {/* timeline */}
        <div className="col-span-1">
          <ol className="relative border-l border-gray-200">
            {works.map((work) => getListItem(work))}
          </ol>
        </div>
      </div>
    </div>
  );
};

function getListItem(work) {
  if (work.genre === "Vocal") {
    return (
      <li className="mb-6 ml-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
          <MusicNoteIcon className="text-blue-800" fill="currentColor" />
        </span>
        <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900">
          {work.title}
        </h3>
        <p className="ml-2 text-sm font-normal text-gray-400">{work.genre}</p>
      </li>
    );
  } else if (work.genre === "Keyboard") {
    return (
      <li className="mb-6 ml-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
          <PianoIcon className="text-blue-800" fill="currentColor" />
        </span>
        <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900">
          {work.title}
        </h3>
        <p className="ml-2 text-sm font-normal text-gray-400">{work.genre}</p>
      </li>
    );
  } else if (work.genre === "Chamber") {
    return (
      <li className="mb-6 ml-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
          <HouseIcon className="text-blue-800" fill="currentColor" />
        </span>
        <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900">
          {work.title}
        </h3>
        <p className="ml-2 text-sm font-normal text-gray-400">{work.genre}</p>
      </li>
    );
  } else {
    return (
      <li className="mb-6 ml-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white">
          <MusicNoteIcon className="text-blue-800" fill="currentColor" />
        </span>
        <h3 className="mb-1 ml-2 text-lg font-semibold text-gray-900">
          {work.title}
        </h3>
        <p className="ml-2 text-sm font-normal text-gray-400">{work.genre}</p>
      </li>
    );
  }
}

export default MusicianPage;

async function fetchDataAsync(setData, id) {
  try {
    await fetch(
      "https://api.openopus.org/work/list/composer/" + id + "/genre/all.json"
    )
      .then((response) => response.json())
      .then((d) => setData(d));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
