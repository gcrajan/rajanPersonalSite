import React from 'react';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "../styles/home.css"
import bg1 from '../images/logo.svg'
function Home(){
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        div: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
        section: {
          initial: {
            x: "100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
      };
    return(
        <div id="home">
            <section className='home-text'>
                <div>
                <motion.h1 {...animations.h1}>
                    Hello, It's me <br/>  <span>Rajan GC</span> 
                </motion.h1>

                <Typewriter
                    options={{
                    strings: ["A website designer,", "A software developer,", "A devops engineer,", "A blockchain learner."],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                    }}
                />

                <motion.div className='btn-div' {...animations.div} transition={{ ease: "easeOut", duration: 1 }}>
                    <a href="mailto:coder@gcrajan.com.np" className='btn-link'>Hire Me</a>
                    <a href="#projects" className='btn-opp-link'>Projects </a>
                </motion.div>
                </div>
            </section>
            
            <motion.section className='home-bg' {...animations.section}>
                <img src={bg1} alt="backgroundimage"/>
            </motion.section>
        </div>
    )
}
export default Home;