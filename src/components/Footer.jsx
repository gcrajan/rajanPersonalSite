import React from 'react';
import '../styles/footer.css'
import { motion } from "framer-motion";

import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import logo from '../images/logo.png'
import rightFilling from '../images/filling.png'
import leftFilling from '../images/filling2.png'


function Footer(){
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
          }
      };
    return(
        <section id="footer">
            <div className='footerInfo'>
                <img src={leftFilling} alt="leftFilling" className='leftFilling'/>
                <img src={rightFilling} alt="rightFilling" className='rightFilling'/>
                <motion.h1 whileInView={animations.whileInView} initial={animations.h1}>WHATS NEXT</motion.h1>
                <motion.h3 whileInView={animations.whileInView} initial={animations.h3}>Lets work together!</motion.h3>
                <p>I am currently learning blockchain and backend. In blockchain, I am learning about solidity, smart contract, hardhat and many more. If you want to share anything about the blockchain, I would be humble. In case of backend, I am learning Node(MERN) and laravel as well. For contact, you can send email at <span>coder@gcrajan.com.np</span>. Feel free to contact.</p>
                <motion.section className='footerSocialMedia' whileInView={animations.whileInView} initial={animations.section} transition={{  delay: 0.5,}}>
                <a href="https://www.linkedin.com/in/rajan-g-c-69a690199/" target='_blank'><img src={linkedin} alt="linkedin" /></a>
                <a href="https://twitter.com/iamgcrajan" target='_blank'><img src={twitter} alt="twitter" /></a>
            </motion.section>
            </div>
            <div className='footerEnd'>
                <p>BUILT FROM SCRATCH BY ME :)</p>
                <a href="#home"><img src={logo} alt="logo" /></a>
            </div>
        </section>
    )
}
export default Footer;