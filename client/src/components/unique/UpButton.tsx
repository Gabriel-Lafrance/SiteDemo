import ScrollToTop from "react-scroll-to-top";
import { FaCircleChevronUp } from "react-icons/fa6"
import React from "react";
import { motion } from "framer-motion";

const UpButton = () => {

        const [EstInRange, SetInRange] = React.useState(false);

        function scrollUp(){
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        function inRange(){
            var y = window.scrollY;
            if (y <= 400) {
                SetInRange(true);
            } else {
                SetInRange(false);
            } 
        }
        React.useEffect(() => {
            window.addEventListener("scroll", inRange)
            inRange();
        },[EstInRange]);
    return (  
        <motion.button 
        initial={{ opacity: 0 }}
        animate={EstInRange ? {opacity : 0} : {opacity : 1}}
        exit={{ opacity: 0.5 }}
        transition={{opacity: { duration: 1 }}}
        onClick={scrollUp} className="m-8 fixed right-0 bottom-0 rounded-full shadow  bg-white/80 text-secondary hover:text-action">
            <FaCircleChevronUp size={32}/>
        </motion.button>
    );
}
 
export default UpButton;
