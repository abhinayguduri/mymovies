import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router";
import Hls from 'hls.js';
import "./Play.scss";
const Play = () => {
  const srcarray = {
    "zee5telugu":"https://news-live-cfgroup.zee5.com/out/v1/06589254a501444cae34f76c6afd5c60/Zee_telugu/index.m3u8",
    "zeecinemastelugu":"https://news-live-cfgroup.zee5.com/out/v1/326675470d6041efb042fd43bca649d1/Zee_Cinemalu_HD/index-connected.m3u8",
    "jioipl":"https://topstreamz.midesi.tv/Skysport/index.m3u8"
  }
  const videoRef = useRef(null);
  const { category, id, season, episode } = useParams();
  useEffect(() => {
    if(category==="livetv"){
      const video = videoRef.current;
    const hls = new Hls();

    if (Hls.isSupported()) {
      hls.loadSource(srcarray[id]);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = srcarray[id];
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
    }
  }, []);
 






  var link = "";
  if (category === "tv") {

    link =
      "https://vidsrc.me/embed/tv?tmdb=" +
      id +
      "&season=" +
      season +
      "&episode=" +
      episode+"&color=ff0000";
  } else if (category === "movie") {
    link = "https://vidsrc.me/embed/movie?imdb=" + id+"&color=ff0000";
  }
  if(category==="livetv"){
    return (
      <>
        <div className="iframeContainer">
        <video className="iframe" ref={videoRef} controls={true} autoPlay={false} />
          {/* <video id='my-video' className='video-js' controls preload='auto' width={640} height={264} data-setup="{}"> 
            <source src="https://news-live-cfgroup.zee5.com/out/v1/06589254a501444cae34f76c6afd5c60/Zee_telugu/index.m3u8" type="application/x-mpegURL">
            </source>
          </video> */}
        </div>
      </>
    );
  }else{
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
  }
  
};

export default Play;
