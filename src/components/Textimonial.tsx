import React from "react";
import style from "./Style/Testimonial.module.scss";

const Textimonial = () => {
  return (
    <section id="Testimonial" className={style.Testimonial}>
      <div className={style.Testimonialpage}>
        <div className={style.sec_headline}>
          <h3>HAPPY CUSTOMERS</h3>
        </div>
        <div className={style.sec_h2}>
          <h2>
            Don't take our word for it. See what <span>customers</span> are
            saying about us.
          </h2>
        </div>
        <div className={style.container}>
          <div className={style.box1}>
            <div className={style.star_icons}>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
            </div>
            <div className={style.box1_p}>
              <p>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vestibulum id ligula porta felis euismod semper. Cras
                justo odio dapibus facilisis sociis natoque.”
              </p>
            </div>
            <div className={style.box1_profile}>
              <div className={style.box1_profile_img}><img src="./pics/person4.jpg" alt="person" /></div>
              <div className={style.box1_profile_name}>
                <h3>Coriss Ambady</h3>
                <p>Financial Analyst</p>
              </div>
            </div>
          </div>
          <div className={style.box2}>
            <div className={style.star_icons}> <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span></div>
            <div className={style.box2_p}>
              <p>
                “Fusce dapibus, tellus ac cursus tortor mauris condimentum
                fermentum massa justo sit amet. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor. Cras mattis consectetur
                purus sit amet fermentum. Aenean lacinia bibendum nulla sed
                consectetur.”
              </p>
            </div>
            <div className={style.box2_profile}>
              <div className={style.box2_profile_img}><img src="./pics/person1.jpg" alt="person" /></div>
              <div className={style.box2_profile_name}>
                <h3>Coriss Ambady</h3>
                <p>Financial Analyst</p>
              </div>
            </div>
          </div>
          <div className={style.box3}>
            <div className={style.star_icons}> <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span></div>
            <div className={style.box3_p}>
              <p>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vestibulum id ligula porta felis euismod semper. Cras
                justo odio dapibus facilisis sociis natoque.”
              </p>
            </div>
            <div className={style.box3_profile}>
              <div className={style.box3_profile_img}><img src="./pics/person2.jpg" alt="person" /></div>
              <div className={style.box3_profile_name}>
                <h3>Coriss Ambady</h3>
                <p>Financial Analyst</p>
              </div>
            </div>
          </div>
          <div className={style.box4}>
            <div className={style.star_icons}> <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span></div>
            <div className={style.box4_p}>
              <p>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vestibulum id ligula porta felis euismod semper. Cras
                justo odio dapibus facilisis sociis natoque.”
              </p>
            </div>
            <div className={style.box4_profile}>
              <div className={style.box4_profile_img}><img src="./pics/person3.jpg" alt="person" /></div>
              <div className={style.box4_profile_name}>
                <h3>Coriss Ambady</h3>
                <p>Financial Analyst</p>
              </div>
            </div>
          </div>
          <div className={style.box5}>
            <div className={style.star_icons}> <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span></div>
            <div className={style.box5_p}>
              <p>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vestibulum id ligula porta felis euismod semper. Cras
                justo odio dapibus facilisis sociis natoque.”
              </p>
            </div>
            <div className={style.box5_profile}>
              <div className={style.box5_profile_img}><img src="./pics/person5.jpg" alt="person" /></div>
              <div className={style.box5_profile_name}>
                <h3>Coriss Ambady</h3>
                <p>Financial Analyst</p>
              </div>
            </div>
          </div>
          <div className={style.box6}>
            <div className={style.star_icons}> <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span>
              <span className={`fa fa-star $`}></span></div>
            <div className={style.box6_p}>
              <p>
                “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Vestibulum id ligula porta felis euismod semper. Cras
                justo odio dapibus facilisis sociis natoque.”
              </p>
            </div>
            <div className={style.box6_profile}>
              <div className={style.box6_profile_img}><img src="./pics/person6.jpg" alt="person" /></div>
              <div className={style.box6_profile_name}>
                <h3>Coriss Ambady</h3>
                <p>Financial Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Textimonial;
