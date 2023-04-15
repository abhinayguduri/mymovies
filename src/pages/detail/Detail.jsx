import React, { Suspense, useEffect, useState } from "react";
import _ from "lodash";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
import "./detail.scss";
import CastList from "./CastList";
import SeasonList from "./SeasonList";

import MovieList from "../../components/movie-list/MovieList";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              {category == "movie" ? (
                <Link to={"/movie/" + item.imdb_id + "/play"}>
                  <div className="watchnow">
                    <button>
                      <h2>Watch Now</h2>
                    </button>
                  </div>
                </Link>
              ) : (
                ""
              )}
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          {category == "tv" ? (
            <div className="container">
              {_.times(item.seasons.length, (i) => (
                <SeasonList
                  id={item.id}
                  season={item.seasons[i].season_number}
                  season_item={item}
                ></SeasonList>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className="container">
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
