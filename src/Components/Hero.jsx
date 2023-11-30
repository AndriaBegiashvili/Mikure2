import React, { useEffect, useState } from "react";
import classes from "../modules/Hero.module.css";
import fire from "../assets/fire.png";
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../UI/card";

const Hero = () => {
  const [filmdata, setFilmdata] = useState([]);

  const img_path = "https://image.tmdb.org/t/p/w1280/";
  const [image, setImage] = useState([]);
  const a = image[0];

  useEffect(() => {
    const fetchMovieImages = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const dataArr = [];

        data.results.forEach((element) => {
          dataArr.push([element.poster_path, element.title, element.overview]);
        });
        const arr = dataArr.slice(1, 6);
        setImage(dataArr.slice(0, 1));
        setFilmdata(arr);
      } catch (error) {
        console.error("Error fetching movie images:", error);
      }
    };

    fetchMovieImages();
  }, []);

  return (
    <>
      <div className={classes.grid}>
        <div className={classes.first_col}>
          <div className={classes.mini_flex}>
            <div className={classes.mini_title}>
              <div>
                <img src={fire} />
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
          <Swiper direction="vertical" spaceBetween={2} slidesPerView={2.5}>
            {filmdata.map((item, index) => (
              <div className={classes.card}>
                <SwiperSlide key={index} className={classes.slide}>
                  <Card source={img_path + item[0]} title={item[1]} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

        <div className={classes.second_col}>
          <div className={classes.big_img}>
            {image.map((item, index) => (
              <img src={img_path + item[0]} key={index} />
            ))}
          </div>
          <div className={classes.reccomended}>
            <div>
              <img src={fire} />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
