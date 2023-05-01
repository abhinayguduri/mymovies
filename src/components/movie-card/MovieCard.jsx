import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;

  let link = "/";
  if(props.category=="livetv"){
    link = "/" + "livetv"+ "/" + item.id+"/play";
  }else{
    link = "/" + category[props.category] + "/" + item.id;link = "/" + category[props.category] + "/" + item.id;
  }
  let bg = item.bg;
  if(item.livetv){
  bg = item.bg;
  }else{
  bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  }
  return (
    <Link to={link}>
      <div
        tabIndex={props.index}
        className="movie-card"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
