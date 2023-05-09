import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const MusicianPage = ({data}) => {
  const { name } = useParams();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const item = data.filter(item => item.name === name);  
  const timestamps = item[0].timestamps;
  const wikipedia = item[0].wikipedia;

  const sortedTimestamps = timestamps.sort((a, b) => parseInt(a.year) - parseInt(b.year));
  
  const [isClicked, setIsClicked] = useState(null);
  const handleClick = (name) => {
    console.log(name);
    setIsClicked(name);
  }

  return (
    <div>
      {/* Header */}
      <nav className="sticky z-20 top-0 flex flex-wrap items-center justify-between px-2 py-10 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-3xl font-semibold leading-relaxed inline-block mr-4 whitespace-nowrap">{name.replace(/_/g, " ")}</span>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={navbarOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} /></svg>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="navbar-danger">
            <ul className="flex flex-col lg:flex-row lg:items-center list-none lg:ml-auto">
              <li><Link to="/musicians" className="px-2 flex items-center font-medium hover:text-gray-600">All</Link></li>
              <li><Link to={wikipedia} className="px-2 flex items-center font-medium hover:text-gray-600">Wiki</Link></li>
              <li><Link to="/about" className="px-2 flex items-center font-medium hover:text-gray-600">About</Link></li>
              <li><Link to={window.location.origin} className="px-2 flex items-center font-medium hover:text-gray-600">Home</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="container px-12 mx-auto flex flex-row">
        {/* timeline */}
        <div className="col-span-1">
          <ol className="relative border-l border-gray-200">                  
              {sortedTimestamps.map((timestamp) => {
                return getListItem(timestamp, isClicked, setIsClicked, handleClick);
              })}
          </ol>
        </div>
      </div>
    </div>
  );
}


function getListItem(timestamp, isClicked, handleClick) {
  if (timestamp.type === 'event') {
    return <li className="mb-6 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
        <CalendarMonthIcon className="w-4 h-4 text-blue-800" fill="currentColor"/>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">{timestamp.year}</h3>
      <p className="text-sm font-normal text-gray-400">{timestamp.detail}</p>
    </li>;
  } else if (timestamp.type === 'opus') {
    return <li className="mb-6 ml-6">            
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
        <HeadphonesIcon className="w-4 h-4 text-blue-800" fill="currentColor"/>
      </span>
      <h3 className="flex items-center sm-1 text-lg font-semibold text-gray-900">{timestamp.year} - {timestamp.name.toUpperCase()}</h3>
      {isClicked === timestamp.name.toUpperCase() ? (
        <span onClick={() => handleClick(null)} className="cursor-pointer underline underline-offset-2 decoration-3 decoration-gray-600 text-sm font-medium text-gray-400 ml-1">COLLAPSE</span>
      ) : (
        <span onClick={() => handleClick(timestamp.name.toUpperCase())} className="cursor-pointer underline underline-offset-2 decoration-3 decoration-gray-600 text-sm font-medium text-gray-400 ml-1">PLAY NOW</span>
      )}
      {isClicked === timestamp.name.toUpperCase() && (
        <iframe width="560" height="315" src={timestamp.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      )}
    </li>;
  } else {
    return null;
  }
}


export default MusicianPage;