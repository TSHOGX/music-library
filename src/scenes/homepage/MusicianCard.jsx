import { Link } from "react-router-dom";

const MusicianCard = ({ name, portrait, born, dead, index }) => {
  return (
    <div className="">
      <figure class="relative max-w-sm cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img class="rounded-lg" src={portrait} alt="image description" />
        </a>
        <figcaption class="absolute px-4 text-lg font-bold text-white bottom-6 hover:hidden">
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
