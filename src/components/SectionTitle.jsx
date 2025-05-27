import React from "react";

/**
 * @param {{ title: string }} props
 */
export const SectionTitle = ({ title }) => (
  <div>
    <h2 className="title">{title}</h2>
    <div className="line"></div>
  </div>
);

