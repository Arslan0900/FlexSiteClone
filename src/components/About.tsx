import React from "react";
import style from "./Style/about.module.scss";

const About = () => {
  return (
    <div id="About" className={style.about}>
      <div className={style.container}>
        <div className={style.box1}>
          <div className={style.img_box1}><img src="./pics/seeScreen.jpg" alt="office pic" /></div>
          <div className={style.img_box2}>
            <div className={style.img1}><img src="./pics/whiteBoard.jpg" alt="" /></div>
            <div className={style.img2}><img src="./pics/stikyNotes.jpg" alt="" /></div>
          </div>
        </div>
        <div className={style.box2}>
          <div className={style.box_h3}>
            <h3>WHAT MAKES US DIFFERENT?</h3>
          </div>
          <div className={style.box_h2}>
            <h2>We bring <span>solutions</span> to make life easier for our customers.</h2>
          </div>
          <div className={style.details_box}>
            <div className={style.details_box_1}>
              <h3>Creativity</h3>
              <p>Curabitur blandit lacus magna ridiculus mus duis mollis.</p>
            </div>
            <div className={style.details_box_1}>
              <h3>Inovative Thinking</h3>
              <p>Curabitur blandit lacus magna ridiculus mus duis mollis.</p>
            </div>
            <div className={style.details_box_1}>
              <h3>Rapid Solutions</h3>
              <p>Curabitur blandit lacus magna ridiculus mus duis mollis.</p>
            </div>
            <div className={style.details_box_1}>
              <h3>Top-Notch Support</h3>
              <p>Curabitur blandit lacus magna ridiculus mus duis mollis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
