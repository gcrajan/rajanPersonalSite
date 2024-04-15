import React,{useState} from 'react';
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/contact.css"

import wave from "../images/wave.svg"
import linkedin from "../images/icon-linkedin.png"
import twitter from "../images/icon-twitter.png"

function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setDisableBtn(true);
        try {
          await addDoc(collection(db, "contacts"), {
            name,
            email,
            message,
          });
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message Sent");
          setDisableBtn(false);
        } catch (error) {
          toast.error("Error");
          console.log(error);
          setDisableBtn(false);
        }
      };

      const animations = {
        
        form: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
    
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
          transition: {
            delay: 0.5,
          },
        },
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
          section: {
            opacity: 0,
            x: "100%",
          }
      };
      

    return(
        <section id="contact">
          <section className='hiddenDiv'></section>
            <section className='topWave'>
            <img src={wave} alt="wave" />
            </section>

            <section className="contactTitle">
                <motion.h3 whileInView={animations.whileInView} initial={animations.h3}>CONTACT</motion.h3>
                <div>
                    <motion.h2  whileInView={animations.whileInView} initial={animations.h3} transition={{  delay: 0.5,}}>Direct message here</motion.h2>
                    <p>You can contact me here directly or contact through social media. See you soon.</p>
                </div>
            </section>

            <motion.section className='contactSocialMedia' whileInView={animations.whileInView} initial={animations.section} transition={{  delay: 0.5,}}>
                <a href="https://www.linkedin.com/in/rajan-g-c-69a690199/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://twitter.com/iamgcrajan" target='_blank' rel="noreferrer"><img src={twitter} alt="twitter" /></a>
            </motion.section>

            <section className='contactDiv'>
            <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
            id='btnContact'
          >
            Send
          </motion.button>
        </motion.form>
            </section>
        </section>
    )
}
export default Contact;