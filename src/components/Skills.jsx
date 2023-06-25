import React from 'react';
import '../styles/skills.css';
import { motion } from "framer-motion";


import filling from '../images/filling.png';
import frontend from '../images/frontend.png';
import design from '../images/design.png';
import blockchain from '../images/blockchain.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import figma from '../images/figma.png';
import illustrator from '../images/illustrator.png';
import smartcontract from '../images/smartcontract.png';
import solidity from '../images/solidity.png';
import hardhat from '../images/hardhat-removebg-preview.png';
import left from '../images/LEFT.png';
import right from '../images/right.png';


function Skills (){
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
        div1: {
          opacity: 0,
          x: "100%",
        },
        div2: {
          opacity: 0,
          y: "50%",
        },
        div3: {
            opacity: 0,
            x: "-100%",
          },
      };
    
    return(
        <section id='skills'>
            <img src={filling} alt="bgfilling" className='skills-img'/>

            <section className="title">
                <motion.h3 whileInView={animations.whileInView} initial={animations.h3}>MY SKILLSET</motion.h3>
                <div>
                    <motion.h2  whileInView={animations.whileInView} initial={animations.h3} transition={{  delay: 0.3,}}>Developer, Designer and Learner</motion.h2>
                    <p>I specialize in building web applications, specially front-end.I enjoy creating effortless user experience and designing delightful digital products. The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me wake up everyday!</p>
                </div>
            </section>

            <section className='bracketDiv'>
                <img src={left} alt="leftbracket" className='leftBracket'/>
                <img src={right} alt="rightbracket" className='rightBracket'/>
            </section>

            <section className="skillsMainDiv">
                <section className='skillsSecondaryDiv'>
                    <motion.div className='skillsDiv' whileInView={animations.whileInView} initial={animations.div1} transition={{  delay: 0.3,}}>
                        <div className='skillsDivTitle'>
                            <img src={design} alt="design" />
                            <p>Designer</p>
                        </div>
                        <div className='skillsDivInfo'>
                            <p>I just want to push my boundary with simple yet asthetically beautiful design.</p>
                            <div className='skillsDivImgs'>
                                <img src={figma} alt="figma" />
                                <img src={illustrator} alt="illustrator" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='skillsDiv' whileInView={animations.whileInView} initial={animations.div2}>
                        <div className='skillsDivTitle'>
                            <img src={frontend} alt="frontend" />
                            <p>Frontend</p>
                        </div>
                        <div className='skillsDivInfo'>
                            <p>I love to play with the frontend. And the joy of pushing it to its limit.</p>
                            <div className='skillsDivImgs'>
                                <img src={html} alt="html" />
                                <img src={css} alt="css" />
                                <img src={js} alt="js" />
                                <img src={react} alt="react" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='skillsDiv' whileInView={animations.whileInView} initial={animations.div3} transition={{  delay: 0.3,}}>
                        <div className='skillsDivTitle'>
                            <img src={blockchain} alt="blockchain" />
                            <p>Blockchain</p>
                        </div>
                        <div className='skillsDivInfo'>
                            <p>I am curious about the new technology and here comes blockchain. Learning...</p>
                            <div className='skillsDivImgs'>
                                <img src={solidity} alt="solidity" />
                                <img src={smartcontract} alt="smartcontract" />
                                <img src={hardhat} alt="hardhat" />
                            </div>
                        </div>
                    </motion.div>
                </section>
            </section>
        </section>
    )
}
export default Skills;