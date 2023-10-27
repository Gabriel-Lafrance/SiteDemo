import React from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Slider = ({autoSlide = false,autoSlideInterval = 3000,slides}: {autoSlide?: boolean;autoSlideInterval?: number;slides: string[];}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, []);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex: number) => {
      setCurrentIndex(slideIndex);
    };

  return (
    <div className="w-full relative overflow-hidden h-[40rem] animate-fadeIn mb-12">
        <div className="h-full w-[300vw] flex transition-all ease-in-out duration-1000 " style={{transform:`translateX(-${currentIndex * 100}vw)`}}>
        {slides.map((slide, slideIndex : number) => (
               <img  key={slideIndex} className="w-screen h-full object-cover"src={slide} alt="" />     
            ))}
        </div>
        <div className="absolute overflow-hidden inset-0 flex items-center justify-between select-none">
            <button onClick={prevSlide} className="p-[3px] ml-4 rounded-full bg-white text-secondary hover:text-action">
                    <FaCircleChevronLeft size={32} />
            </button>
            <button onClick={nextSlide} className="p-[3px] mr-4 rounded-full  bg-white text-secondary hover:text-action">
                <FaCircleChevronRight size={32} />
            </button>
        </div>
    </div>
  );
};

export default Slider;
