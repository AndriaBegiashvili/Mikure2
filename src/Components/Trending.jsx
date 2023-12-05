import React, { useEffect, useState } from "react";
import classes from "../modules/Trending.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchMovieImages } from "../shared/movieApi";
import RatedCard from "../UI/ratedCard";
import fire from "../assets/fire.png"
import TrendCard from "../UI/trendCard";

const Trending = () => {
  const [contMovie, setContMovie] = useState([]);

  const img_path = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { continueWatching } = await fetchMovieImages();
        setContMovie(continueWatching);
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
          <div className={classes.name}>
            <h3>Rated Movies</h3>
          </div>
          <Swiper
            direction="vertical"
            spaceBetween={20}
            slidesPerView={4.5}
            className={classes.swiper}
          >
            {contMovie.map((item, index) => (
              <SwiperSlide key={index} className={classes.card}>
                <RatedCard
                  source={img_path + item[0]}
                  key={index}
                  title={item[1]}
                  rating={item[3]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={classes.second_col}>
            <div className={classes.spc_btwn}>
                <div className={classes.name_trend}>
                    <div className={classes.fire}>
                        <img src={fire} alt="fire" />
                    </div>
                    <div>
                        <h3>Trending Now</h3>
                    </div> 
                </div>
                <div className={classes.bttn}>
                    <button>See all</button>
                </div>
            </div>
            <Swiper
            className={classes.swiperHorizontal}
            spaceBetween={30}
            slidesPerView={3.8}
          >
            {contMovie.map((item, index) => (
              <SwiperSlide key={index} >
                <TrendCard
                    source = {img_path+item[0]}
                    title={item[1]}
                    story={item[2]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </>
  );
};

export default Trending;
