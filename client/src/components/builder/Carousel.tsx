import { FaCircleChevronRight, FaCircleChevronLeft }from 'react-icons/fa6'

import React from 'react';

const Carousel = ({autoSlide = false,autoSlideInterval = 3000,slides,}: {autoSlide?: boolean;autoSlideInterval?: number;slides: string[];}) => {

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
        <div className='max-w-[80%] max-h-[780px] min-h-[412px] h-[60vw] w-[95vw] m-auto py-16 px-4 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full flex flex-col  justify-end rounded-2xl bg-center bg-cover duration-500'>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex : number) => (
                        <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`z-10 transition-all cursor-pointer w-4 h-4 m-2 border-[3px] border-white bg-secondary rounded-full ${currentIndex === slideIndex ? "" : "bg-opacity-50 hover:bg-action"}`}/>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevSlide} className="p-[3px] ml-4 rounded-full shadow bg-white text-secondary hover:text-action">
                    <FaCircleChevronLeft size={32} />
                </button>
                <button onClick={nextSlide} className="p-[3px] mr-4 rounded-full shadow bg-white text-secondary hover:text-action">
                    <FaCircleChevronRight size={32} />
                </button>
            </div>
        </div>
     );
}
 
export default Carousel;
