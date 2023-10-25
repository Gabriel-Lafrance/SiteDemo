import { HTMLMotionProps, Variants, motion, useAnimation  } from "framer-motion";
import { ReactNode } from "react";
import  React  from "react";
import { useInView } from "react-intersection-observer";


interface AnimatedDivProps extends HTMLMotionProps<"div"> {
    variant: Variants;
    children: ReactNode;
    duration : number;
  }
    
    export const AnimatedDiv: React.FC<AnimatedDivProps> = ({ variant, children, duration, ...props }) => {

      const controls = useAnimation();
      const [ref, inView] = useInView({ threshold : 0 });

      React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

      return (
          <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              exit="hidden"
              variants={variant}
              transition={{
                ease : "anticipate",
                duration : duration
              }}
              {...props}
              >
              {children}
          </motion.div>

      );
    };
