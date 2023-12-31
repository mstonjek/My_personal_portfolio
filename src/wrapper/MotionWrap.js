import React from 'react';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion"; // ! better import



const MotionWrap = (Component, classNames) => function HOC() {
  return (

    <motion.div
        whileInView={{ y:[100, 50, 0], opacity: [0, 0, 1]}}
        transition={{ duration: 0.5 }}
        classNames={`${classNames} app__flex`}
    >
        <Component />
    </motion.div>



   
  )
}

export default MotionWrap