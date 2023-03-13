import React from "react";
import "./Home.scss";
import { IMAGES } from "../../constants/images";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__logo">
          <img
            src={IMAGES.LOGO}
            alt="logo"
            className="home__header__logo__logo-img"
          ></img>
        </div>
        <div className="home__header__module-link">Module</div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
