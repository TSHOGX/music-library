import { Routes, Route } from "react-router-dom";
import Homepage from "./scenes/homepage";
import MusicianRoot from "./scenes/musician";
import MusicianPage from "./scenes/musician/MusicianPage";
import About from "./scenes/about";
import NotFound from "./scenes/notfound";
import { data } from "./data/musicians";

function App() {

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage data={data}/>} />
          <Route path="/musicians">
            <Route index element={<MusicianRoot names={data.map(item => item.name)}/>} />
            <Route path=":name" element={<MusicianPage data={data}/>} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;