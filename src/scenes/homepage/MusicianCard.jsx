import { Link } from "react-router-dom";

const MusicianCard = ({ name, portrait, born, dead, id }) => {
  return (
    <div className="">
      <figure className="relative cursor-pointer filter grayscale hover:grayscale-0">
        <Link to={"/musicians/" + id}>
          {/* <a href="#"> */}
          <img
            className="rounded-lg max-w-[10rem]"
            src={portrait}
            alt="image description"
          />
          {/* </a> */}
        </Link>
        <figcaption className="absolute px-4 text-lg font-bold text-white bottom-6 hover:hidden">
          <p>{name}</p>
          <p>
            {born} - {dead}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default MusicianCard;
