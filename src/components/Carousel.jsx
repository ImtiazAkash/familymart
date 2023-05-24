import React, { useEffect, useRef, useState } from "react";
import Class from "../styles/Carousel.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ products }) {
  const carouselRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust this value to control scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsMouseDown(true);
    setStartX(e.touches[0].clientX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].clientX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust this value to control scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    let intervalId = null;
    let currentIndex = 0;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        carouselRef.current.scrollLeft =
          carouselRef.current.offsetWidth * currentIndex;
        currentIndex = (currentIndex + 1) % products.length;
      }, 3000); // Adjust the auto-scroll speed (milliseconds)
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    const handleScroll = () => {
      const scrollPosition = carouselRef.current.scrollLeft;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      setIsPrevDisabled(scrollPosition === 0);
      setIsNextDisabled(scrollPosition === maxScroll);
    };

    carouselRef.current.addEventListener("mouseenter", stopAutoScroll);
    carouselRef.current.addEventListener("mouseleave", startAutoScroll);
    carouselRef.current.addEventListener('scroll', handleScroll);

    startAutoScroll();

    return () => {
      carouselRef.current.removeEventListener("mouseenter", stopAutoScroll);
      carouselRef.current.removeEventListener("mouseleave", startAutoScroll);
      carouselRef.current.removeEventListener('scroll', handleScroll);
      stopAutoScroll();
    };
  }, [products]);

  return (
    <div className={Class.carousel}>
      <button
        className={`${Class.prevbtn} ${isPrevDisabled ? Class.disabled : ''}`}
        onClick={() => carouselRef.current.scrollBy(-300, 0)}
        disabled={isPrevDisabled}
      >
        <AiOutlineArrowLeft />
      </button>
      <div
        className={Class.carouselContent}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {products.map((product, index) => (
          <div key={index} className={Class.carouselItem}>
            {product}
          </div>
        ))}
      </div>
      <button
        className={`${Class.nextbtn} ${isNextDisabled ? Class.disabled : ''}`}
        onClick={() => carouselRef.current.scrollBy(300, 0)}
        disabled={isNextDisabled}
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
}

export default Carousel;
