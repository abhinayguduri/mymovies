import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/page-header/PageHeader";
import { useEffect } from "react";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";

const Catalog = () => {
  const { category } = useParams();
  useEffect(() => {
    const start = () => {
      window.scrollTo(0, 0);
    };
    start();
  }, [category]);
  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
