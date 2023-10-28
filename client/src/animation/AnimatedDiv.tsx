
import { Variants, motion } from "framer-motion";
import { ReactNode} from "react";
import React from "react";
import { useIntersectionObserver } from "usehooks-ts";
//import { useIntersectionObserver } from '../hooks/useIntersectionObserver'


interface AnimatedDivProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  variant: Variants;
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, variant, className }) => {


  const ref = React.useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold : 0.1 });
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

















/*(import { Transition, TransitionClasses } from "@headlessui/react";
import { ReactNode, Ref } from "react";
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from 'usehooks-ts'

interface AnimatedDivProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  variant: TransitionClasses;
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, variant, className }) => {


  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold : 0.1 });
  let isVisible = !!entry?.isIntersecting



  return (
    <div ref={ref}>
      <Transition as={'div'} show={isVisible} className={className} {...variant}>
        {children}
      </Transition>
    </div>
  );
};
*/
