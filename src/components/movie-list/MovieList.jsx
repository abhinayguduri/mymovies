import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {
    const livetv = [{"title":"Zee 5 Telugu","bg":"https://www.adgully.com/img/800/201906/zee5.jpg","livetv":true,"id":"zee5telugu"},
                    {"title":"Zee Cinemas Telugu","bg":"https://www.pngkey.com/png/detail/532-5320038_zee-cinema.png","livetv":true, "id":"zeecinemastelugu"},
                    {"title":"Jio IPL","bg":"https://static.vecteezy.com/system/resources/previews/020/336/272/non_2x/jio-logo-jio-icon-free-free-vector.jpg", "livetv":true, "id":"jioipl"}
                    ]
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if(props.type == "livetv"){
                setItems(livetv);
            }else{
            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
            
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;
