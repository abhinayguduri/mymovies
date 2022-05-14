import React from "react";

import "./episode-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const EpisodeCard = (props) => {
  const item = props.item;
  const season_item = props.season_item;
  const link =
    "/tv/" +
    season_item.id +
    "/" +
    item.season_number +
    "/" +
    item.episode_number +
    "/play";

  const bg = apiConfig.w500Image(
    item.still_path ||
      props.season_item.postar_path ||
      props.season_item.backdrop_path
  );

  return (
    <Link to={link}>
      <div className="episode-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.episode_number + ". " + (item.title || item.name)}</h3>
    </Link>
  );
};

export default EpisodeCard;
