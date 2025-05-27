import React from "react";


/**
 * @param {{ track: { name: string, artist: string, cover: string } }} props
 */
export const TrackCard = ({ track }) => (
  <div className="track-card">
    <img src={track.cover} alt={track.name} />
    <div>
      <strong>{track.name}</strong>
      <p>{track.artist}</p>
      <p className="artist-tags">pop · rock · k-pop</p>
    </div>
  </div>
);

