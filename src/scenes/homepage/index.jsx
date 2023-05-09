import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MusicianCard from "./MusicianCard";

const Homepage = ({data}) => {
  const scrollRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSelect = (event, value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: 'center' });
    }
  }, [searchQuery]);

  return (
    <div>
      {/* Header */}
      <div className="sticky z-20 top-0 flex flex-col items-center px-20 py-8 md:pt-20 md:pb-10 bg-white">
        <h1 className="mb-5 md:mb-16 font-extrabold leading-none tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">My personal 
          <Link to={"/about"}> <span className="underline underline-offset-3 decoration-8 decoration-blue-400 cursor-pointer">classical music</span></Link> collection</h1>
        <Autocomplete
          disablePortal
          id="musician-search-bar"
          options={data.map((item) => item.name.replace(/_/g, " "))}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Musician" />}
          onChange={handleSelect}
        />
      </div>

      {/* Cards */}
      <div className="container px-4 mx-auto">
        {data.map((item, index) => (
          <div key={index} ref={searchQuery === item.name.replace(/_/g, " ") ? scrollRef : null}>
            <MusicianCard name={item.name} portrait={item.portrait} born={item.born} dead={item.dead} wikipedia={item.wikipedia} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;