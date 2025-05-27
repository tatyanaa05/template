

/**
 * @param {{ artist: { name: string, image: string} }} props
 */
export function ArtistCard({artist }) {
  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <h3 className="artist-name">{artist.name}</h3>
      <p className="artist-tags">pop · rock · k-pop</p>
    </div>
  );
}

