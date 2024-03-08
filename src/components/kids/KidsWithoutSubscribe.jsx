import React from "react";
import plus from "./assets/logo.8cef7719.svg";
import back from "./assets/2177AE2F-6FBA-4DA1-A22E-047D3BE91FD2.jpeg";
import logo1 from "./assets/benefit-kinopoisk-logo.da97d629.svg";
import contnt1 from "./assets/benefit-kinopoisk-bg-2x.491e1650.png";
import tiger from "./assets/zaika.png";
import tigerBig from "./assets/tiger.png";
import kotik from "./assets/kotik.png";
import kotikBg from "./assets/kotikBg.png";
import where from "./assets/where.png";
import whereBg from "./assets//whereBg.png";
import meduza from "./assets/meduza.png";
import meduzaBg from "./assets/meduzaBg.png";
import aa from "./assets/aa.svg";
import aaBg from "./assets/aaBg.png";
import star from "./assets/star.svg";
import starBg from "./assets/starBg.png";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import bg from "./assets/2177AE2F-6FBA-4DA1-A22E-047D3BE91FD2.jpeg";

const KidsWithoutSubscribe = () => {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const featureAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <div className="subcribe_kids">
      <div className="forback">
        <div className="subscribe_header">
          <div className="subs_description">
            <img src={plus} alt="" />
            <h1>
              Детские разделы на <span>Кинопоиске</span> <br />
              и&nbsp;
              <span>Яндекс Музыке</span> , быстрый возврат билетов <br />{" "}
              на&nbsp;детские события на&nbsp;
              <span>Яндекс Афише</span> <br /> и&nbsp;весёлая&nbsp;учёба
              в&nbsp;приложениях.
            </h1>
          </div>
          <div className="subs_button">
            <button className="try">
              Попробовать первый месяц - бесплатно
            </button>
            <p>далее 199 KGS в месяц</p>
          </div>
        </div>
      </div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        // className={classes.Features}
      >
        <div className="header_aaa">
          <motion.div
            custom={1}
            variants={textAnimation}
            className="header_content1"
          >
            <div>
              <img src={logo1} width={70} alt="" />
              <div style={{ color: "white" }} class="descriprtion">
                Детский раздел <br /> на Кинопоиске <br /> только с мультиками{" "}
                <br /> и кино по возрасту
              </div>
            </div>
            <div className="content1_description">
              <div>
                <img width={650} src={contnt1} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div custom={1} variants={textAnimation} className="content_2">
          <div className="header_content2">
            <div className="left">
              <img src={tiger} width={60} alt="" />
              <span style={{ color: "white" }}>
                Развивающие игры <br /> в приложении «Сказбука»
              </span>
              <img src={tigerBig} width={650} alt="" />
            </div>
            <div className="right">
              <img src={kotik} width={60} alt="" />
              <span style={{ color: "white" }}>
                Подготовка к школе с котиком <br /> в приложении «Кубокот»
              </span>
              <img src={kotikBg} width={650} alt="" />
            </div>
          </div>
        </motion.div>
      </motion.section>

      <div className="content_2">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.div
            custom={1}
            variants={textAnimation}
            className="header_content2"
          >
            <div className="left">
              <img src={where} width={60} alt="" />
              <span style={{ color: "white" }}>
                Функция «Где ты?» с которой <br /> вы всегда будете знать,{" "}
                <br /> где ваш ребёнок
              </span>
              <img src={whereBg} width={650} alt="" />
            </div>
            <div className="right">
              <img src={meduza} width={60} alt="" />
              <span style={{ color: "white" }}>
                Мультики из рисунков <br /> с Анимопусом
              </span>
              <img src={meduzaBg} width={650} alt="" />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.div custom={1} variants={textAnimation} className="content_2">
            <div className="header_content2">
              <div className="left">
                <img src={aa} width={60} alt="" />
                <span style={{ color: "white" }}>
                  Быстрый возврат билетов <br /> на детские события <br />
                  на Яндекс Афише
                </span>
                <img src={aaBg} width={650} alt="" />
              </div>
              <div className="right">
                <img src={star} width={60} alt="" />
                <span style={{ color: "white" }}>
                  Детский раздел <br /> на Яндекс Музыке <br /> с песенками и
                  сказками
                </span>
                <img src={starBg} width={650} alt="" />
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      <div style={{ padding: "15% 10%" }}>
        <div className="subs_button">
          <button className="try">Попробовать первый месяц - бесплатно</button>
          <p>далее 199 KGS в месяц</p>
        </div>
      </div>
    </div>
  );
};

export default KidsWithoutSubscribe;
