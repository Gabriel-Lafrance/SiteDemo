
export const fadeIn = {
  hidden: { opacity: 0.0 },
  visible: { opacity: 1 },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: "-20px" },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDownBig = {
  hidden: { opacity: 0, y: "-2000px" },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: "-20px" },
  visible: { opacity: 1, x: 0 },
};

export const fadeInLeftBig = {
  hidden: { opacity: 0, x: "-2000px" },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: "20px" },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRightBig = {
  hidden: { opacity: 0, x: "2000px" },
  visible: { opacity: 1, x: 0 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: "20px" },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUpBig = {
  hidden: { opacity: 0, y: "2000px" },
  visible: { opacity: 1, y: 0 },
};

export const fadeOut = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

export const fadeOutDown = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: "20px" },
};

export const fadeOutDownBig = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: "2000px" },
};

export const fadeOutLeft = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 0, x: "-20px" },
};

export const fadeOutLeftBig = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 0, x: "-2000px" },
};

export const fadeOutRight = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 0, x: "20px" },
};

export const fadeOutRightBig = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 0, x: "2000px" },
};

export const fadeOutUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: "-20px" },
};

export const fadeOutUpBig = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: "-2000px" },
  
};

export const slideInDown = {
  hidden: { opacity: 0, y: "-2000px" },
  visible: { opacity: 1, y: 0 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: "-2000px" },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: "2000px" },
  visible: { opacity: 1, x: 0 },
};

export const slideOutLeft = {
  hidden: { opacity: 1, x: "0" },
  visible: { opacity: 0, x: "-2000px" },
};

export const slideOutRight = {
  hidden: { opacity: 1, x: "0" },
  visible: { opacity: 0, x: "2000px" },
};

export const slideOutUp = {
  hidden: { opacity: 1, y: "0" },
  visible: { opacity: 0, y: "-2000px" },
};

export const simple = {
  enter: 'transition-opacity duration-75',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity duration-150',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export const spinIn = {
  enter: 'transform transition duration-[400ms]',
  enterFrom: 'opacity-0 rotate-[-120deg] scale-50',
  enterTo: 'opacity-100 rotate-0 scale-100',
  leave: 'transform duration-200 transition ease-in-out',
  leaveFrom: 'opacity-100 rotate-0 scale-100',
  leaveTo: 'opacity-0 scale-95',
};

export const notification = {
  enter: 'transform ease-out duration-300 transition',
  enterFrom: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
  enterTo: 'translate-y-0 opacity-100 sm:translate-x-0',
  leave: 'transition ease-in duration-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export const dropdown = {
  enter: 'transition ease-out duration-100',
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: 'transition ease-in duration-75',
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
};

export const slideIn = {
  enter: 'transform transition ease-in-out duration-500 sm:duration-700',
  enterFrom: 'translate-x-full',
  enterTo: 'translate-x-0',
  leave: 'transform transition ease-in-out duration-500 sm:duration-700',
  leaveFrom: 'translate-x-0',
  leaveTo: 'translate-x-full',
};

export const popin = {
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0 scale-95',
  enterTo: 'opacity-100 scale-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95',
};
