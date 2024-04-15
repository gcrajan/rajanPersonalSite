import React, { useState } from "react";
import "../styles/projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import items from '../assests/data.json'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import shareall from "../images/shareall.png";
import saralsarkar from "../images/saralsarkar.png";
import voting from "../images/voting.png";
import syncnote from "../images/syncnote.png";


function Projects() {
    const [dataItems,setDataItems]=useState(items.projects);

    const filterItems= (category)=> {
        const newItems = items.projects.filter((item)=> item.category=== category);
        setDataItems(newItems);
    }

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
    btn1: {
        opacity: 0,
        x: "-100%",
      },
      btn2: {
        opacity: 0,
        y: "80%",
      },
      btn3: {
        opacity: 0,
        y: "80%",
      },
      btn4: {
        opacity: 0,
        x: "100%",
      },
      article: {
        opacity: 0,
        y: "40%",
      },
      article2: {
        opacity: 0,
        y: "20%",
      }
  };

  return (
    <section id="projects">

      <section className="title">
        <motion.h3 whileInView={animations.whileInView} initial={animations.h3}>
          MY PROJECTS
        </motion.h3>
        <div>
          <motion.h2
            whileInView={animations.whileInView}
            initial={animations.h3}
            transition={{ delay: 0.3 }}
          >
            Some of the major projects
          </motion.h2>
          <p>
            Different tools where used to build these site. You can see the
            source code and also the download link. Others project below can be view live . <span><a href="#allproject" className="aDivLink">Other Projects</a></span>
          </p>
        </div>
      </section>

      <section className="sliderProject">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={shareall} alt="shareall"/>
            <div>
                <h1>SHAREALL</h1>
                <motion.h2 whileInView={animations.whileInView} initial={animations.article}>Share anything, anywhere</motion.h2>
                <p>ShareAll, a site where you can share all you products or goods which are no longer in use for you but can be useful for others. This platform allows you to share the products to others for free. The main objective of creating this site is to allow the humanity grow by sharing the things. Also there is discussion section where user can discuss about the products they want.</p>
                <h4><a href="https://github.com/gcrajan/shareall" target="_blank" rel="noreferrer" className="btn-link">Source Code</a></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={saralsarkar} alt="saralsarkar"/>
            <div>
                <h1>सरल सरकार</h1>
                <motion.h2  whileInView={animations.whileInView} initial={animations.article}>Government at your doorstep</motion.h2>
                <p>सरल सरकार, a site where governmental bodies can perform their tasks. The main objective of this site is to allow its citizen to provide govermental services at their door step by booking the date and time according to citizen free time. Also, some complains can be registered by selecting the authority like electricity complain for NEA(incase of nepal).</p>
                <h4><a href="https://github.com/gcrajan/SaralSarkar" target="_blank" rel="noreferrer" className="btn-link">Source Code</a></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={voting} alt="voting"/>
            <div>
                <h1>डिजिटल मतदान</h1>
                <motion.h2 whileInView={animations.whileInView} initial={animations.article}>Reliable and Partial Voting</motion.h2>
                <p> डिजिटल मतदान ,a voting site where you can conduct the voting. This site allows us to conduct a voting, where several participant can vote.Everything will be managed by admin him/herself like starting of the election to its end. The results will also be shown. Overall, we try to create a voting site inspired from nepal voting system but in electronic way.</p>
                <h4><a href="https://github.com/gcrajan/DigitalMatadan" target="_blank" rel="noreferrer" className="btn-link">Source Code</a></h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={syncnote} alt="syncnote"/>
            <div>
                <h1>Syncnote</h1>
                <motion.h2 whileInView={animations.whileInView} initial={animations.article}>Collobrative Notepad</motion.h2>
                <p>SyncNote, a revolutionary application by HamroQuest, simplifies team collaboration by providing a seamless platform for sharing and editing notes in real-time. With its intuitive interface and advanced features, SyncNote enables users to share notes effortlessly through local networks, ensuring fast and secure communication. You can download from below.</p>
                <h4><a href="https://hamroquest.netlify.app/" target="_blank" rel="noreferrer" className="btn-link">Download</a></h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="title reverseTitle" id="allproject">
        <motion.h3 whileInView={animations.whileInView} initial={animations.h3}>
          OTHER PROJECTS
        </motion.h3>
        <div>
          <motion.h2
            whileInView={animations.whileInView}
            initial={animations.h3}
            transition={{ delay: 0.3 }}
          >
            Some of the other projects
          </motion.h2>
          <p>
            Different tools where used to build these site. See specific project by clicking the below topics.  You can see the source code and live demo.
          </p>
        </div>
      </section>

      <section className="otherProject">
        <div className="projectTopic">
            <motion.button className="filterBtn btn-link" onClick={()=>filterItems("Design")} whileInView={animations.whileInView} initial={animations.btn1} 
            transition={{ delay: 0.4 }}>Design</motion.button>
            <motion.button className="filterBtn btn-link" onClick={()=>filterItems("JS")} whileInView={animations.whileInView} initial={animations.btn3}>Javascript</motion.button>
            <motion.button className="filterBtn btn-link" onClick={()=>filterItems("React")} whileInView={animations.whileInView} initial={animations.btn4} 
            transition={{ delay: 0.4 }}>React</motion.button>
            <motion.button className="filterBtn btn-link" onClick={()=>filterItems("Nextjs")} whileInView={animations.whileInView} initial={animations.btn2}>Next js</motion.button>
        </div>
        <div className="projectShowCase">
            {dataItems.map((items)=>{
                const {id,title,category,description,imgSrc,codeUrl,demoUrl}=items;
                return <motion.article2 key={id} className="otherProjectDiv"  whileInView={animations.whileInView} initial={animations.article} 
                transition={{ delay: 0.3 }}>
                    <div>
                      <img src={imgSrc} alt={title} className="projectPhoto"/>
                    </div>
                    <p className="categoryProject">{category}</p>
                    <div className="projectInfo">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={codeUrl} target="_blank" rel="noreferrer">Source Code</a>
                        <a href={demoUrl} target="_blank" rel="noreferrer">Demo Live</a>
                    </div>
                </motion.article2>
            })}
        </div>
      </section>
    </section>
  );
}
export default Projects;
