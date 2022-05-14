import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./episode-list.scss";

import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";

import Button from "../button/Button";

import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import EpisodeCard from "../episode-card/EpisodeCard";

const EpisodeList = (props) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getepisodes = async () => {
      const params = {};
      const res = await tmdbApi.episodes(props.id, props.season);
      setEpisodes(res.episodes);
    };
    getepisodes();
  }, []);
  console.log(episodes);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {episodes.map((item, i) => (
          <SwiperSlide key={i}>
            <EpisodeCard item={item} season_item={props.season_item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

EpisodeList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default EpisodeList;
