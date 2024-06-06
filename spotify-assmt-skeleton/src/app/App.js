import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar.jsx";
import SearchResults from "../components/searchresults/SearchResults.jsx";
import Playlist from "../components/playlist/Playlist.jsx";

function App() {
  // create state hooks that manages the characteristics of our application
  const [searchResults, setsearchResults] = useState([]);
  const [playlistName, setplayListName] = useState("Create New Playlist");
  const [playListTracks, setplayListTracks] = useState([]);

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

  function addTrack(track) {
    const existTrack = playListTracks.find(
      (currentTrack) => track.id === currentTrack.id
    );
    if (!existTrack) {
      setplayListTracks([...playListTracks, track]);
      return;
    }
  }

  //function removeTrack will be passed to component Playlist
  function removeTrack(track) {
    const filteredTrack = playListTracks.filter(
      (currentTrack) => track.id !== currentTrack.id
    );
    setplayListTracks(filteredTrack);
  }
  console.log(playListTracks);

  //function savePlayListName to store a new play list name
  function updatePlayListName(name) {
    setplayListName(name);
  }

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
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistName={playlistName}
            playListTracks={playListTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
