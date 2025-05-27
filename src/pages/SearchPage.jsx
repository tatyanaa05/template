import { SearchBar } from "../components/SearchBar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../components/Card";

const API_KEY = "319ce416c7407718cfea63db3bde1712";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
  const search = useQuery().get("q") || "";
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) return;

    setLoading(true);
    const fetchData = async () => {
      try {
        const [aRes, alRes, tRes] = await Promise.all([
          fetch(
            `${BASE_URL}?method=artist.search&artist=${search}&api_key=${API_KEY}&format=json`
          ),
          fetch(
            `${BASE_URL}?method=album.search&album=${search}&api_key=${API_KEY}&format=json`
          ),
          fetch(
            `${BASE_URL}?method=track.search&track=${search}&api_key=${API_KEY}&format=json`
          ),
        ]);

        const [aData, alData, tData] = await Promise.all([
          aRes.json(),
          alRes.json(),
          tRes.json(),
        ]);

        setArtists(aData.results.artistmatches.artist || []);
        setAlbums(alData.results.albummatches.album || []);
        setTracks(tData.results.trackmatches.track || []);
      } catch (err) {
        console.error("Ошибка при поиске:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);
  return (
    <div>
        <SearchBar />
        <div className="search-page">
          <h2 className="search-title">🔍 Search results for “{search}”</h2>
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <>
              <section>
                <h3 className="section-title">Artists</h3>
                <div className="grid">
                    {artists.map((artist) => (
                        <Card
                        key={artist.name}
                        name={artist.name}
                        listeners={artist.listeners}
                        image={artist.image?.[2]?.["#text"]} 
                        />
                    ))}
                </div>
              </section>
              <section>
                <h3 className="section-title">Albums</h3>
                <div className="grid">
                    {albums.map((album) => (
                        <Card
                        key={album.name + album.artist}
                        name={album.name}
                        listeners={album.artist}
                        image={album.image?.[2]?.["#text"]} 
                        />
                    ))}
                </div>
              </section>
              <section>
                <h3 className="section-title">Tracks</h3>
                <ul className="list">
                {tracks.map((track, index) => (
                    <li className="track-item" key={index}>
                    <button className="play-button">▶</button>
                    <img src={track.image?.[1]?.["#text"]} alt={track.name} className="track-image" />
                    <div className="track-info">
                        <span className="track-title">{track.name}</span>
                        <span className="track-artist">{track.artist}</span>
                    </div>
                    <span className="track-duration">{track.duration}</span>
                    </li>
                ))}
                </ul>
              </section>
            </>
          )}
        </div>
    </div>
  );
};

export default SearchPage;
