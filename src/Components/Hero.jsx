import React, { useEffect, useState } from "react";
import classes from "../modules/Hero.module.css";
import fire from "../assets/fire.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../UI/card";
import polygon from "../assets/Polygon 2.png";
import time from '../assets/Time.png'
import more from "../assets/More.png"
import { fetchMovieImages } from "../shared/movieApi";

const Hero = () => {
  const [filmdata, setFilmdata] = useState([]);

  const img_path = "https://image.tmdb.org/t/p/w1280/";
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { image, filmData } = await fetchMovieImages();
        setImage(image);
        setFilmdata(filmData);
      } catch (error) {

        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={classes.grid}>
        <div className={classes.first_col}>
          <div className={classes.mini_flex}>
            <div className={classes.mini_title}>
              <div>
                <img src={fire} alt="fire img" />
              </div>
              <div>
                <h3>Most Watching</h3>
              </div>
            </div>
            <div className={classes.mini_title}>
              <h3 className={classes.sortH3}>
                Sort by &nbsp;<span>Today</span>
              </h3>
            </div>
          </div>
          <Swiper direction="vertical" spaceBetween={50} slidesPerView={2.5}>
            {filmdata.map((item, index) => (
              <div className={classes.card}>
                <SwiperSlide key={index}>
                  <Card
                    source={img_path + item[0]}
                    key={index}
                    title={item[1]}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

        <div className={classes.second_col}>
          <div className={classes.big_img}>
            {image.map((item, index) => (
              <img src={img_path + item[0]} key={index} alt="movie img" />
            ))}
          </div>
          <div className={classes.reccomended}>
            <div>
              <img src={fire} alt="fire img" />
            </div>
            <div>
              <h2>Reccomended for you!</h2>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.big_name}>
              {image.map((item, index) => (
                <h2 key={index}>{item[1]}</h2>
              ))}
            </div>
            <div className={classes.overview}>
              {image.map((item, index) => (
                <h2 key={index}>{item[2]}</h2>
              ))}
              <div className={classes.flex}>
              <div className={classes.play}>
                <img src={polygon} alt="triangle" />
                <button>Play</button>
              </div>
              <div className={classes.later}>
                <img src={time} alt="time" />
                <button>Watch Later</button>
              </div>
              <div className={classes.info}>
                <img src={more} alt="more" />
                <button>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
