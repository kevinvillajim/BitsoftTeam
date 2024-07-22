import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";

export default function CardsClientes({ cardsClientes }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center bg-background pb-[10rem] pt-[5rem]">
      <div className="max-w-6xl w-full">
        <Slider {...settings}>
          {cardsClientes.map((cliente, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 mx-2 border border-primary border-r-0 border-l-0 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="h-[180px] mb-2 flex items-center justify-center">
                <img
                  src={`${index + 1}.png`}
                  alt={cliente.title}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="w-full flex justify-center">
                <span className="text-center text-primary-foreground font-semibold text-xs">
                  {cliente.title}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
