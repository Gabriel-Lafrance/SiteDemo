import { Transition, TransitionClasses } from "@headlessui/react";
import { Variants, motion } from "framer-motion";
import { ReactNode, Ref } from "react";
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from 'usehooks-ts'

interface AnimatedDivTestProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  variant: Variants;
}

export const AnimatedDivTest: React.FC<AnimatedDivTestProps> = ({ children, variant, className }) => {


  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold : 0.3 });
  let isVisible = !!entry?.isIntersecting
  const [dejaAfficher, setAfficher] = React.useState(false);

  React.useEffect(() => {
    if (dejaAfficher == false){
      if ( isVisible == true){
        setAfficher(true);
      }
    }
  }),[isVisible]

  return (
    <div ref={ref}>
      <motion.div
        variants={variant}
        initial="hidden"
        animate={dejaAfficher ?  "visible" : "hidden"}
        className={className}>
        {children}
    </motion.div>
  </div>
  );
};
