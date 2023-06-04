import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MusicianCard from "./MusicianCard";

const Homepage = () => {
  const scrollRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchQueryPeriod, setSearchQueryPeriod] = useState(null);

  const [dataPop, setDataPop] = useState(null);
  const [dataMedieval, setDataMedieval] = useState(null);
  const [dataRenaissance, setDataRenaissance] = useState(null);
  const [dataBaroque, setDataBaroque] = useState(null);
  const [dataClassical, setDataClassical] = useState(null);
  const [dataEarlyRomantic, setDataEarlyRomantic] = useState(null);
  const [dataRomantic, setDataRomantic] = useState(null);
  const [dataLateRomantic, setDataLateRomantic] = useState(null);
  const [data20Century, setData20Century] = useState(null);
  const [dataPostWar, setDataPostWar] = useState(null);
  const [data21Century, setData21Century] = useState(null);

  const periodList = [
    "Medieval",
    "Renaissance",
    "Baroque",
    "Classical",
    "Early Romantic",
    "Romantic",
    "Late Romantic",
    "20th Century",
    "Post-War",
    "21st Century",
  ];

  useEffect(() => {
    fetchDataAsync(setDataPop, "/pop.json");
    fetchDataAsync(setDataMedieval, "/epoch/Medieval.json");
    fetchDataAsync(setDataRenaissance, "/epoch/Renaissance.json");
    fetchDataAsync(setDataBaroque, "/epoch/Baroque.json");
    fetchDataAsync(setDataClassical, "/epoch/Classical.json");
    fetchDataAsync(setDataEarlyRomantic, "/epoch/Early Romantic.json");
    fetchDataAsync(setDataRomantic, "/epoch/Romantic.json");
    fetchDataAsync(setDataLateRomantic, "/epoch/Late Romantic.json");
    fetchDataAsync(setData20Century, "/epoch/20th Century.json");
    fetchDataAsync(setDataPostWar, "/epoch/Post-War.json");
    fetchDataAsync(setData21Century, "/epoch/21st Century.json");
  }, []);

  // console.log(data);

  const handleSelect = (event, value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchQuery]);

  const handleSelectPeriod = (event, value) => {
    setSearchQueryPeriod(value);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchQueryPeriod]);

  if (
    dataMedieval === null ||
    dataRenaissance === null ||
    dataBaroque === null ||
    dataClassical === null ||
    dataEarlyRomantic === null ||
    dataRomantic === null ||
    dataLateRomantic === null ||
    data20Century === null ||
    dataPostWar === null ||
    data21Century === null
  ) {
    return (
      <div className="flex justify-center items-center h-screen text-6xl font-bold">
        Fetching data...
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="sticky z-20 top-0 flex flex-col px-20 py-8 md:pt-20 md:pb-10 bg-white">
        <h1 className="mb-5 md:mb-16 font-extrabold leading-none tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl">
          This is
          <Link to={"/about"}>
            {" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 cursor-pointer">
              classical music
            </span>
          </Link>{" "}
          library
        </h1>
        <div className="container md:px-5 flex flex-col gap-2 md:flex-row justify-center md:justify-between">
          <Autocomplete
            disablePortal
            id="search-by-period"
            options={periodList}
            className="w-full md:w-80"
            renderInput={(params) => (
              <TextField {...params} label="Search by period" />
            )}
            onChange={handleSelectPeriod}
          />
          <Autocomplete
            disablePortal
            id="search-by-name"
            options={dataPop.map((item) => item.name)}
            className="w-full md:w-80"
            renderInput={(params) => (
              <TextField {...params} label="Search by name" />
            )}
            onChange={handleSelect}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="container px-4 mx-auto flex flex-wrap justify-center gap-2">
        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Pop" ? scrollRef : null}
        >
          Popular
        </div>
        {dataPop.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Medieval" ? scrollRef : null}
        >
          Medieval
        </div>
        {dataMedieval.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Renaissance" ? scrollRef : null}
        >
          Renaissance
        </div>
        {dataRenaissance.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Baroque" ? scrollRef : null}
        >
          Baroque
        </div>
        {dataBaroque.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Classical" ? scrollRef : null}
        >
          Classical
        </div>
        {dataClassical.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Early Romantic" ? scrollRef : null}
        >
          Early Romantic
        </div>
        {dataEarlyRomantic.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Romantic" ? scrollRef : null}
        >
          Romantic
        </div>
        {dataRomantic.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Late Romantic" ? scrollRef : null}
        >
          Late Romantic
        </div>
        {dataLateRomantic.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "20st Century" ? scrollRef : null}
        >
          20th Century
        </div>
        {data20Century.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "Post-War" ? scrollRef : null}
        >
          Post-War
        </div>
        {dataPostWar.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}

        <div
          className="w-full font-bold text-2xl py-5 flex justify-center"
          ref={searchQueryPeriod === "21st Century" ? scrollRef : null}
        >
          21st Century
        </div>
        {data21Century.map((item) => (
          <div key={item.id} ref={searchQuery === item.name ? scrollRef : null}>
            <MusicianCard
              name={item.name}
              portrait={item.portrait}
              born={item.birth ? item.birth.split("-")[0] : null}
              dead={item.death ? item.death.split("-")[0] : null}
              // wikipedia={item.wikipedia}
              index={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

async function fetchDataAsync(setDataPop, endpoint) {
  try {
    await fetch("https://api.openopus.org/composer/list" + endpoint)
      .then((response) => response.json())
      .then((d) => setDataPop(d.composers));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
