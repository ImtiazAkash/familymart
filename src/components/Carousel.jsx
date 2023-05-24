import React, { useEffect, useRef } from "react";
import Class from "../styles/Carousel.module.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
 
  const carouselRef = useRef(null)

  useEffect(() => {
    let intervalId = null;
    let currentIndex = 0;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
        currentIndex = (currentIndex + 1) % products.length;
      }, 3000); // Adjust the auto-scroll speed (milliseconds)
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    carouselRef.current.addEventListener('mouseenter', stopAutoScroll);
    carouselRef.current.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();

    return () => {
      carouselRef.current.removeEventListener('mouseenter', stopAutoScroll);
      carouselRef.current.removeEventListener('mouseleave', startAutoScroll);
      stopAutoScroll();
    };
  }, [products]);

  return (
    <div className={Class.carousel}>
      <button className={Class.prevbtn }onClick={() => carouselRef.current.scrollBy(-300, 0)}>
        <AiOutlineArrowLeft />
      </button>
      <div className={Class.carouselContent} ref={carouselRef}>
        {products.map((product, index) => (
          <div
            key={index}
            className={Class.carouselItem}
          >
            {product}
          </div>
        ))}
      </div>
      <button className={Class.nextbtn} onClick={() => carouselRef.current.scrollBy(300, 0)}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}

export default Carousel;
