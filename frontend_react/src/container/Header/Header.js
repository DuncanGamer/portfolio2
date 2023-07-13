import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
  }
}
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [0, 100], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <spam>👋</spam>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Bonjour, je suis</p>
              <h1 className="head-text"> Daniel </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
            <p className="p-text">Full Stack</p>
          </div>
        </div>
      </motion.div>
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 5, delayChildren: 0.5 }}
      className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
         whileInView={{scale: [0, 1] }}
         transition={{ duration: 1, ease: "easeInOut" }}
         className="overlay_circle"
         src={images.circle}
          alt="circle_bg"
        />
        </motion.div>
        <motion.div
        varients={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
        >
          {[ images.redux, images.sass, images.react].map((circle, index) => (
            <div className="circle-cmp app__flex" key ={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
       
      </motion.div>
    </div>
  )
}

export default Header
