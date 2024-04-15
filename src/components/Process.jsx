import React from 'react';
import '../styles/process.css';
import { motion } from "framer-motion";
import bgImage from "../images/bgImage.svg";
import lightpurple from "../images/lightpurple.svg";
import purple from "../images/purple.svg";
import filling from "../images/filling2.png";

function Process(){

  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    h3: {
      opacity: 0,
      x: "-100%",
    },
    h2: {
      opacity: 0,
      x: "-100%",
    },
    img: {
      opacity: 0,
      x: "-100%",
    },
  }
  return(
    <section className="process">

      <img src={filling} alt="filling" className='processFilling'/>

      <section className="title reverseTitle">
        <motion.h3 whileInView={animations.whileInView} initial={animations.h3}>
          MY PROCESS
        </motion.h3>
        <div>
          <motion.h2
            whileInView={animations.whileInView}
            initial={animations.h3}
            transition={{ delay: 0.3 }}
          >
            Process I follow
          </motion.h2>
          <p>
            There are some process that I usually follow. Here, I am going to showcase my process here. If you have any suggestion than you can share me <a href="#contact" className='aDivLink'>here</a>.
          </p>
        </div>
      </section>

      <section className="processInfo">
        <motion.img src={bgImage} alt="bgimage" whileInView={animations.whileInView} initial={animations.img}  transition={{ delay: 0.4 }} className='processInfoImg'/>
        <section className='processInfoDiv'>
          <div className="one">
            <img src={lightpurple} alt="lightpurple"  className='lightpurple1'/>
            <img src={purple} alt="purple" className='purple'/>
            <img src={lightpurple} alt="lightpurple" className='lightpurple2'/>
            <h1>01</h1>
            <motion.h2  whileInView={animations.whileInView} initial={animations.h2}>Pre-Process</motion.h2>
            <p>This is simple yet important part of my process. During this, I roughly thinks or study about my project like what is it use for?, who are the target audience?, how are other competitors? etc. I perform brainstroming and some rough sketch here.</p>
          </div>
          <div className="two">
            <h1>02</h1>
            <motion.h2 whileInView={animations.whileInView} initial={animations.h2}>Design</motion.h2>
            <p>Designing is always the tricky part. It requires alot of imagination. It will be alot simpler if pre-process is done in right way. I use figma for web designing, adobe illustrator for vector arts (logo) and some other free resources for images.</p>
          </div>
          <div className="one">
            <h1>03</h1>
            <motion.h2 whileInView={animations.whileInView} initial={animations.h2}>Development</motion.h2>
            <p>According to design, I start to give my project a life. Sometimes, I use plain Javascript(HTML,CSS,JS) where sometimes I prefer React for frontend development. For backend I perfer Node and laravel which I am currently learning.</p>
          </div>
        </section>
      </section>
    </section>
  )
}
export default Process;