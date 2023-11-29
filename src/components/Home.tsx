import React from "react";
import style from "./Style/home.module.scss";

const Home = () => {
  return (
    <section id="Home" className={style.homepage}>
      <div className={style.centerbtn}><i className={`${style.playIcon} fa fa-play-circle`}></i></div>
      <div className={style.bg}></div>
       <section className={`${style.sec1}`}>
       <div className={style.container}>
          <img  src="./pics/lines.svg" alt="style logo" />
          <h4>We bring <span className={style.text}>solutions</span> to make life easier for our customers.</h4>
          <p>
            We have considered our solutions to support every stage of your
            growth
          </p>
          <div className={style.styleBtn}>
            <div className={style.button}>Get start</div>
            <img src="./pics/arrow.svg" alt="style logo" />
          </div>
        </div>
      </section>
      <section className={`${style.sec2}`}>
        <img src="./pics/firstPic.jpg" alt="officeimage" />
      </section> 
    </section>
  );
};

export default Home;
