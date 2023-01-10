import { Button } from "@mui/material";
import React from "react";
import "./Home.css";

const Home = () => {
    function flybtns () {
        const Compendium = document.querySelector(".containerBtns__Compendium")

        Compendium.classList.remove("containerBtns__Compendium")
        Compendium.classList += " containerBtns__Compendium--active"

        const About = document.querySelector(".containerBtns__About")

        About.classList.remove("containerBtns__About")
        About.classList += " containerBtns__About--active"
    }

   


  return (
    <div className="home">
      <div className="home__container">
        <img
            onMouseOver={flybtns}
            
          className="home__img"
          src="https://www.nicepng.com/png/detail/13-135583_zelda-link-png-hd-link-zelda-ocarina-of.png"
          alt=""
        />
          <div className="home__containerCompendium">
            <Button
                
              variant="outlined"
              className="containerBtns__Compendium"
              fullWidth
            >
              Compendium
            </Button>
          </div>

          <div className="home__containerAbout">
            <Button
              variant="outlined"
              className="containerBtns__About"
              fullWidth
            >
              About
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Home;
