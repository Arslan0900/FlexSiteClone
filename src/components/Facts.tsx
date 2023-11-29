import React from "react";
import style from "./Style/facts.module.scss";

const Facts = () => {
  return (
    <div id="Facts" className={style.facts}>
      <div className={style.container}>
        <div className={style.box1}>
          <img src="./pics/4personsmeetingpic.jpg" alt="office pic" />
        </div>
        <div className={style.box2}>
          <div className={style.box2_container}>
          <div className={style.box_h3}>
            <h3>CUSTOMER SATISFACTION</h3>
          </div>
          <div className={style.box_h2}>
            <h2>
              We make your spending <span>stress-free</span> for you to have the
              perfect control.
            </h2>
          </div>
          <div className={style.box_p}>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus. Maecenas sed diam eget
              risus varius blandit sit amet non magna.
            </p>
          </div>
          <div className={style.review_box}>
            <div className={style.customers_review}>
              <div className={style.review_box_h2}>
                <h2>99.7%</h2>
              </div>
              <div className={style.review_box_h3}>
                <h3>Customer Satisfaction</h3>
              </div>
              <div className={style.review_box_star}>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
              </div>
            </div>
            <div className={style.new_customers_review}>
              <div className={style.review_box_h2}>
                <h2>4x</h2>
              </div>
              <div className={style.review_box_h3}>
                <h3>New Visitors</h3>
              </div>
              <div className={style.review_box_star}>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
                <span className={`fa fa-star $`}></span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
