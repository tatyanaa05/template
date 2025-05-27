import {SectionTitle} from '../components/SectionTitle';
import {ArtistCard} from '../components/ArtistCard';
import {TrackCard} from '../components/TrackCard';
import { getTopArtists, getTopTracks } from '../api/lastfm';
import { useEffect, useState } from 'react';
import {SearchBar} from '../components/SearchBar';

export function HomePage(){
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const artistsData = await getTopArtists();
      const tracksData = await getTopTracks();
      setArtists(artistsData);
      setTracks(tracksData);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <SearchBar/>
      <SectionTitle title="Hot right now" />
      <div className="artist-grid">
        {artists.slice(0, 12).map((artist) => (
          
          <ArtistCard key={artist.name} artist={{ name: artist.name, image: artist?.image[2]['#text'] }} />
          
        ))}
      </div>

      <SectionTitle title="Popular tracks" />
      <div className="tracks-list">
        {tracks.slice(0, 13).map((track) => (
          <TrackCard
            key={track.name + track.artist.name}
            track={{
              name: track.name,
              artist: track.artist.name,
              cover: track.image[1]['#text'],
            }}
          />
        ))}
      </div>
    </div>
  );
};


