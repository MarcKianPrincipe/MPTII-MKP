import React from "react";
import "./Home.scss";
import { IMAGES } from "../../constants/images";
import { Link } from "react-router-dom";

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

      <div className="home__content">
        <div className="home__content__title">
          <h1 className="home__content__title__text">it intern projects</h1>
        </div>
        <div className="home__content__links">
          <Link to="/inventory" className="home__content__links__btn-links">
            Kian Principe
          </Link>
          <Link to="/request" className="home__content__links__btn-links">
            Rogie Delapaz
          </Link>
        </div>
      </div>

      <div className="home__footer">
        <p className="home__footer__text-footer">
          Copyright © 2023 Much Prosperity Trading International Inc.. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
