import React from "react";
import style from "./Style/pricing.module.scss";
import {useNavigate} from "react-router-dom";
const Pricing = () => {
 const navigate = useNavigation();

 const handleContactClick = ()=>{
	navigate("/Contact")
 }
  return (
    <div id="Pricing" className={style.pricing}>
      <div className={style.box_h3}>
        <h3>OUR PRICING</h3>
      </div>
      <div className={style.box_h2}>
        <h2>
          We offer great prices, premium products and <span>quality</span>{" "}
          service for your business.
        </h2>
      </div>
      <div className={style.card_box}>
        <div className={style.card_1}>
          <div className={style.card_h2}>
            <h2>
              <span>$</span>9<span>/mo</span>
            </h2>
          </div>
          <div className={style.card_h3}>
            <h3>Basic Plan</h3>
          </div>
          <div className={style.list}>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>1
              Project
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>100K
              API Access
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>100MB
              Storage
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>Weekly
              Reports
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>24/7
              Support
            </div>
          </div>
          <div className={style.btn}>
            <div onClick={handleContactClick} className={style.button}>Choose plan</div>
          </div>
        </div>
        <div className={style.card_2}>
          <div className={style.card_h2}>
            <h2>
              <span>$</span>9<span>/mo</span>
            </h2>
          </div>
          <div className={style.card_h3}>
            <h3>Basic Plan</h3>
          </div>
          <div className={style.list}>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>1
              Project
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>100K
              API Access
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>100MB
              Storage
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>Weekly
              Reports
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>24/7
              Support
            </div>
          </div>
          <div className={style.btn}>
            <div onClick={handleContactClick} className={style.button}>Choose plan</div>
          </div>
        </div>
        <div className={style.card_3}>
          <div className={style.card_h2}>
            <h2>
              <span>$</span>9<span>/mo</span>
            </h2>
          </div>
          <div className={style.card_h3}>
            <h3>Basic Plan</h3>
          </div>
          <div className={style.list}>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>1
              Project
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>100K
              API Access
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>100MB
              Storage
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>Weekly
              Reports
            </div>
            <div>
              <i className={`${style.checkmark} fa fa-check-circle`}></i>24/7
              Support
            </div>
          </div>
          <div className={style.btn}>
            <div onClick={handleContactClick} className={style.button}>Choose plan</div>
          </div>
        </div>
      </div>
      <div className={style.details_box}>
        <div className={style.details_box_1}>
          <div className={style.unicone}><i className={` ${style.icon} fa fa-question-circle`}></i></div>
        <div className={style.box_details}>
          <h3>Can I cancel my subscription?</h3>
          <p>
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
        </div>
        </div>
        <div className={style.details_box_2}>
          <div className={style.unicone}><i className={` ${style.icon} fa fa-question-circle`}></i></div>
        <div className={style.box_details}>
          <h3>Which payment methods do you accept?</h3>
          <p>
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
        </div>
        </div>
        <div className={style.details_box_3}>
          <div className={style.unicone}><i className={` ${style.icon} fa fa-question-circle`}></i></div>
        <div className={style.box_details}>
          <h3>How can I manage my account?</h3>
          <p>
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
        </div>
        </div>
        <div className={style.details_box_4}>
          <div className={style.unicone}><i className={` ${style.icon} fa fa-question-circle`}></i></div>
        <div className={style.box_details}>
          <h3>Is my credit card information secure?</h3>
          <p>
            Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
            adipiscing augue sit justo elit. Mauris bibendum mattis et diam
            tellus. Auctor mauris felis lobortis tempus.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
