import React from "react";
import style from "./Style/footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.box1}>
          <div className={style.box1_h2}>
            <h2>
              Join our community by using our services and grow your business.
            </h2>
          </div>
          <div className={style.btn}>
            <div className={style.button}>Try It For Free</div>
          </div>
        </div>
        <div className={style.divider}></div>
        <div className={style.box2}>
          <div className={style.box2_sec1}>
            <div className={style.box2_sec1_icon}>
              <img src="./pics/logo.svg" alt="logo" />
            </div>
            <div className={style.box2_sec1_details}>
              <p>© Flux by elemis.</p>
              <p>Powered by Webflow.</p>
            </div>
            <div className={style.box2_sec1_link}>
              <i className={`${style.link_icon} fa fa-twitter`}></i>
              <i className={`${style.link_icon} fa fa-facebook`}></i>
              <i className={`${style.link_icon} fa fa-linkedin`}></i>
              <i className={`${style.link_icon} fa fa-youtube-play`}></i>
              <i className={`${style.link_icon} fa fa-instagram`}></i>
            </div>
          </div>
          <div className={style.box2_sec2}>
            <div className={style.box2_sec2_h3}><h3>Get in Touch</h3></div>
            <div className={style.box2_sec2_p1}><p>Moonshine St. 14/05 London,</p><p> United Kingdom</p></div>
            <div className={style.box2_sec2_p2}><p>info@email.com</p><p>00 (123) 456 78 90</p></div>
          </div>
          <div className={style.box2_sec3}>
            <div className={style.box2_sec3_h3}>
              <h3>Template</h3>
            </div>
            <div className={style.box2_sec3_p1}>
              <p>Style Guide</p>
            </div>
            <div className={style.box2_sec3_p2}>
              <p>404</p>
            </div>
            <div className={style.box2_sec3_p3}>
              <p>Licensing</p>
            </div>
          </div>
          <div className={style.box2_sec4}>
            <div className={style.box2_sec4_h3}>
              <h3>Our Newsletter</h3>
            </div>
            <div className={style.box2_sec4_p}>
              <p>Subscribe to our newsletter to get our news delivered to you.</p>
            </div>
            <div className={style.box2_sec4_search_bar}>
              <input type="search" placeholder=" Email Address"/><span>join</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
