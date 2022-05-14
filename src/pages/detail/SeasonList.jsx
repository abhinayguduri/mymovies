import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import EpisodeList from "../../components/episode-list/EpisodeList";
const SeasonList = (props) => {
  return (
    <div className="section mb-3" key={props.season}>
      <div className="section__header mb-2">
        <h2>Season {props.season}</h2>
      </div>
      <EpisodeList
        id={props.id}
        season={props.season}
        season_item={props.season_item}
      />
    </div>
  );
};

export default SeasonList;
