import React from "react";
import "../styles/footer.css";
import { motion } from "framer-motion";

import rajan from "../images/rajan.jpg";
import manjul from "../images/manjul.jpg";
import logo from "../images/logo.png";
import rightFilling from "../images/filling.png";
import leftFilling from "../images/filling2.png";

function Footer() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    h1: {
      opacity: 0,
      x: "-100%",
    },
    h3: {
      opacity: 0,
      x: "100%",
    },
    section: {
      opacity: 0,
      y: "-100%",
    },
  };
  return (
    <section id="footer">
      <div className="footerInfo">
        <img src={leftFilling} alt="leftFilling" className="leftFilling" />
        <img src={rightFilling} alt="rightFilling" className="rightFilling" />
        <motion.h1 whileInView={animations.whileInView} initial={animations.h1}>
          WHATS NEXT
        </motion.h1>
        <p>
        "I'm thrilled to share that I'm currently immersed in developing some exciting products that are poised to make a positive impact on the lives of Nepali people. To spearhead this endeavor, I've founded Hamroquest, a company dedicated to innovation and progress. You can learn more about our projects and get in touch by visiting <a href='https://hamroquest.netlify.app/' target='_blank' rel="noreferrer">Hamroquest</a>. I'm eagerly looking forward to sharing more about our journey and welcoming your feedback and collaboration."
        </p>
        <motion.section
          className="developer-info"
          whileInView={animations.whileInView}
          initial={animations.section}
          transition={{ delay: 0.5 }}
        >
          <div>
            <img src={rajan} alt="rajan" />
            <div className="developer-name">
              <p>Rajan GC</p>
              <p>Developer</p>
            </div>
          </div>
          <div>
            <img src={manjul} alt="manjul" />
            <div className="developer-name">
              <p>Manjul Sharma</p>
              <p>Developer</p>
            </div>
          </div>
        </motion.section>
      </div>
      <div className="footerEnd">
        <p>Copyright © 2023 Rajan. All Rights Reserved.</p>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </section>
  );
}
export default Footer;
