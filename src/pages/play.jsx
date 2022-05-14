import React from "react";

import { useParams } from "react-router";
import "./Play.scss";
const Play = () => {
  const { category, id, season, episode } = useParams();
  var link = "";
  if (category == "tv") {
    link =
      "https://www.2embed.ru/embed/tmdb/tv?id=" +
      id +
      "&s=" +
      season +
      "&e=" +
      episode;
  } else if (category == "movie") {
    link = "https://www.2embed.ru/embed/imdb/movie?id=" + id;
  }
  return (
    <>
      <div className="iframeContainer">
        <iframe
          className="iframe"
          src={link}
          frameborder="0"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
    </>
  );
};

export default Play;
