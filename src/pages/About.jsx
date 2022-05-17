import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/page-header/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader>About</PageHeader>
      <div className="container">
        <div className="section mb-3 About">
          <h2>What is A.G Movies ?</h2>
          <br></br>
          <h3>
            A.G Movies is another streaming site that delivers Movies and TV
            programs for free but it's not entirely legal. If you want better
            service in legal way. It's better to subcribe to HBO, Netflix, Hulu,
            Amazon, Apple, Disney. Go to theaters or rent a movies!.
          </h3>
          <br></br>
          <h2>Is it safe to stream & downloading in this website?</h2>
          <br></br>
          <h3>
            Using this website is safe for users to stream. But downloading,
            uploading & distribute it is illegal. Users will not get into any
            trouble while using our website. It's highly not recommended to
            download the files and share them to public, It might get you in
            trouble.
          </h3>
          <br></br>
          <h2>How A.G Movies work ?</h2>
          <br></br>
          <h3>
            The contents being serve are from non-affiliated third-parties.
            [Vidcloud, Hydrax] The creator of the site are not making any
            profits. All the advertisements (Ex. Pop-ups, Banners) are from the
            hosting site.
          </h3>
          <br></br>
          <h2>There's so many advertisements.</h2>
          <br></br>
          <h3>
            We are very sorry that we cant help you with that. We have no
            control in the ads being serve. (Might be a Malware, Porn Ads) Don't
            download anything in the popups. If you don't want to be annoyed. I
            highly recommended to subscribe in legal streaming site that you can
            afford. (Yes, It's worth it!)
          </h3>
          <br></br>
          <h2>Why Movies or TV-shows sometimes loads slow?</h2>
          <br></br>
          <h3>
            Movies or TV shows loads depend on your internet connection. It
            usually takes 3 - 10 seconds on some devices with an average
            connection, so please be patient.
          </h3>
          <br></br>
          <h2>I experience bugs or errors. What should I do now?</h2>
          <br></br>
          <h3>
            If you experience fuzzy bugs you can try to clear your cache first
            then try to open it and if the bug still appears please report it to
            us so we can fix it immediately.<br></br>
          </h3>
          <br></br>
          <h3>
            <a className="SendEmail" href="mailto:abhinayguduri@protonmail.com">
              Send Email
            </a>
          </h3>
          <br></br>
          <h2>Disclaimer</h2>
          <br></br>
          <h3>
            This site does not store any files on its server. All contents are
            provided by non-affiliated third parties and all files is already
            circulating online!
          </h3>
          <br></br>
          <div className="Love">
            <h4>Made with ❤️ By Abhinay Guduri</h4>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default About;
