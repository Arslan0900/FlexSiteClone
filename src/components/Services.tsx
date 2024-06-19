import React from "react";
import style from "./Style/services.module.scss";
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/Contact'); // Navigate to the contact route
  }
  return (
    <section id="Services" className={style.services}>
      <div className={style.container}>
        <div className={style.left_box}>
          <div className={style.sec_headline}>
            <h3>WHAT WE DO?</h3>
          </div>
          <div className={style.sec_h2}>
            <h2>
              The service we offer is <span>specifically</span> designed to meet
              your needs.
            </h2>
          </div>
          <div className={style.sec_p}>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Donec
              ullamcorper nulla non metus auctor fringilla. Integer posuere erat
              a ante venenatis dapibus posuere velit aliquet.
            </p>
          </div>
          <div className={style.styleBtn}>
            <div onClick={handleContactClick} className={style.button}>More Details</div>
          </div>
        </div>
        <div className={style.right_box}>
          <div className={style.small_box}>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}>
                <img src="./pics/MarketingAutomation.png" alt="person" />
              </div>
              <div className={style.box1_profile_name}>
                <h3>Marketing Automation</h3>
                <p>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.</p>
              </div>
            </div>
          </div>
          <div className={style.small_box}>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}>
                <img src="./pics/projectManagement.png" alt="person" />
              </div>
              <div className={style.box1_profile_name}>
                <h3>Project Management</h3>
                <p>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.</p>
              </div>
            </div>
          </div>
          <div className={style.small_box}>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}>
                <img src="./pics/webAnalytics.png" alt="person" />
              </div>
              <div className={style.box1_profile_name}>
                <h3>Web Analytics</h3>
                <p>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.</p>
              </div>
            </div>
          </div>
          <div className={style.small_box}>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}>
                <img src="./pics/SEO.png" alt="person" />
              </div>
              <div className={style.box1_profile_name}>
                <h3>SEO Services</h3>
                <p>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.</p>
              </div>
            </div>
          </div>
          <div className={style.small_box}>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}>
                <img src="./pics/MarketResearch.png" alt="person" />
              </div>
              <div className={style.box1_profile_name}>
                <h3>Market Research</h3>
                <p>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.</p>
              </div>
            </div>
          </div>
          <div className={style.small_box}>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}>
                <img src="./pics/socialMedia.png" alt="person" />
              </div>
              <div className={style.box1_profile_name}>
                <h3>Social Media Management</h3>
                <p>Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
