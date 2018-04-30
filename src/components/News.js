import React from "react";

const News = ({ title, link }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </li>
  );
};

export default News;
