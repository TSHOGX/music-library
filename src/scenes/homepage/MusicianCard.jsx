import { Link } from "react-router-dom";

const MusicianCard = ({ name, portrait, born, dead, wikipedia, index }) => {
  return (
    <div className="px-10  md:grid grid-cols-3 gap-x-6 my-5 md:my-0">
      {index % 2 === 0 ? (
        <>
          <div className="hidden md:flex justify-center items-center">
            <Link to={"/musicians/" + name}>
              <span className="text-gray-500 text-2xl font-medium tracking-wide ease-out duration-200 hover:text-3xl">
                {name.replace(/_/g, " ")}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <hr className="border-t-2 border-gray-400 w-1/3 ml-3 mr-3" />
            <span className="flex justify-center text-gray-500 font-medium w-1/3 uppercase tracking-wide">
              {born} - {dead}
            </span>
            <hr className="border-t-2 border-gray-400 w-1/3 ml-3 mr-3" />
          </div>

          <div className="flex justify-center items-center">
            <figure className="h-auto max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105">
              <Link to={"/musicians/" + name}>
                <img className="rounded-lg" src={portrait} alt={name} />
                {/* <p className="absolute px-4 text-lg text-white bottom-6 md:hidden">{name.replace(/_/g, " ")}</p> */}
              </Link>
            </figure>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <figure className="h-auto max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105">
              <Link to={"/musicians/" + name}>
                <img className="rounded-lg" src={portrait} alt={name} />
                {/* <p className="absolute px-4 text-lg text-white bottom-6 md:hidden">{name.replace(/_/g, " ")}</p> */}
              </Link>
            </figure>
          </div>

          <div className="hidden md:flex items-center">
            <hr className="border-t-2 border-gray-400 w-1/3 ml-3 mr-3" />
            <span className="flex justify-center text-gray-500 font-medium w-1/3 uppercase tracking-wide">
              {born} - {dead}
            </span>
            <hr className="border-t-2 border-gray-400 w-1/3 ml-3 mr-3" />
          </div>

          <div className="hidden md:flex justify-center items-center">
            <Link to={"/musicians/" + name}>
              <span className="text-gray-500 text-2xl font-medium tracking-wide ease-out duration-200 hover:text-3xl">
                {name.replace(/_/g, " ")}
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MusicianCard;
