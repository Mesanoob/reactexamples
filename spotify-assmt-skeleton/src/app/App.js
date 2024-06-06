import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar.jsx";
import SearchResults from "../components/searchresults/SearchResults.jsx";
import Playlist from "../components/playlist/Playlist.jsx";

function App() {
  // create state hooks that manages the characteristics of our application
  const [searchResults, setsearchResults] = useState([]);

  // at the start of this app component, provide default values for searchResults (lifecycle hook)
  useEffect(() => {
    setsearchResults([
      {
        id: 1,
        name: "Track 1",
        artist: "Track 1 Artist",
        album: "Track 1 Album",
      },
      {
        id: 2,
        name: "Track 2",
        artist: "Track 2 Artist",
        album: "Track 2 Album",
      },
      {
        id: 3,
        name: "Track 3",
        artist: "Track 3 Artist",
        album: "Track 3 Album",
      },
    ]);
  }, []);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults searchResults={searchResults} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
