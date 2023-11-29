import React from "react";
import style from "./Style/process.module.scss";

const Process = () => {
  return (
    <div id="Process" className={style.process}>
      <section className={style.processpage}>
        <div className={style.sec_headline}>
          <h3>WHY CHOOSE US?</h3>
        </div>
        <div className={style.sec_h2}>
          <h2>
            Here are a few <span>reasons</span> why our customers choose Flux.
          </h2>
        </div>
        <div className={style.box_1}>
          <div className={style.card1}>
            <div className={style.card1_no}>
              <p>01</p>
            </div>
            <div className={style.card1_p_text}>
              <h3>Collect Ideas</h3>
              <p>Duis mollis commodo luctus cursus commodo tortor.</p>
            </div>
          </div>
          <div className={style.card2}>
            <div className={style.card2_no}>
              <p>02</p>
            </div>
            <div className={style.card2_p_text}>
              <h3>Data analysis</h3>
              <p>Vivamus sagittis lacus augus fusce dapibus tellus nibh.</p>
            </div>
          </div>
          <div className={style.card3}>
            <div className={style.card3_no}>
              <p>03</p>
            </div>
            <div className={style.card3_p_text}>
              <h3>Finalize Product</h3>
              <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p>
            </div>
          </div>
        </div>
        <div className={style.box_2}>
          <div className={style.box_img}>
            <img src="./pics/4personmeetingscreen.jpg" alt="officeimage" />
          </div>
          <div className={style.text_box}>
            <h3>Collect Ideas</h3>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
              nulla non metus auctor fringilla. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
              justo sit amet risus.
            </p>
            <div className={style.box_list}>
                <div className={style.list1}>Aenean eu leo quam. Pellentesque ornare.</div>
                <div className={style.list2}>Nullam quis risus eget urna mollis ornare.</div>
                <div className={style.list3}>Donec id elit non mi porta gravida at eget.</div>
            </div>
            <div className={style.btn_div}>
            <div className={style.button}>Learn More</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
