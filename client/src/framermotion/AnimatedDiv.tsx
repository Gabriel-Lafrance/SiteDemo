import { Transition, TransitionClasses } from "@headlessui/react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

import { ReactNode } from "react";
import  React  from "react";



interface AnimatedDivProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    variant : TransitionClasses;
  }
    
    export const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, variant,  className }) => {

      const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
      });
      

      return (
          <Transition ref={ref} as={'div'} show={entry?.isIntersecting} {...variant} className={className}>
            {children}
          </Transition>

      );
    };
