import { useState } from "react";
import Button from "./Button";

export default function HomeBannerCarrousel({ carrousel }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carrousel.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carrousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { title, text, link, textbtn, img } = carrousel[currentIndex];

  return (
    <section className="h-screen bg-gradient-to-r from-[#F47521] to-red-500 text-white pb-[6rem] pt-[9.8rem] px-[4rem] relative flex">
      <div className="container flex flex-col md:flex-row justify-center items-center">
        <div className="px-[1.2rem] md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4">{title}</h1>
          <p className="mb-8">{text}</p>
          <div className="w-[100%] flex gap-[3rem]">
            <Button
              link={link}
              title={textbtn.toLowerCase()}
              text={textbtn}
            />
          </div>
        </div>
        <div className="relative px-[2.5rem] md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <img
              src="/bg2.png"
              alt="Background"
              className="h-full object-cover img_transparent"
            />
          </div>
          <img
            src={img}
            alt="Product Image"
            className="relative z-1 max-w-full img_transparent"
          />
        </div>
      </div>
      <span
        className="text-[40px] material-symbols-outlined absolute left-0 top-1/2 transform -translate-y-1/2 p-1 text-white text-center cursor-pointer butHov mx-2"
        onClick={handlePrevClick}
      >
        chevron_left
      </span>
      <span
        className="text-[40px] material-symbols-outlined absolute right-0 top-1/2 transform -translate-y-1/2 p-1 text-white text-center cursor-pointer butHov mx-2"
        onClick={handleNextClick}
      >
        chevron_right
      </span>
    </section>
  );
}
