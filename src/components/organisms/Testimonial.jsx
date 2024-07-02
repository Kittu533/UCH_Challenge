import PropTypes from "prop-types";
import Slider from "react-slick";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = ({ onClick }) => (
  <button
    className="nextArrow absolute top-1/2 -right-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center border-2 border-purple-300 text-purple-300 p-6 rounded-full bg-white"
    onClick={onClick}
  >
    <i className="fas fa-chevron-right text-2xl"></i>
  </button>
);

SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const SamplePrevArrow = ({ onClick }) => (
  <button
    className="prevArrow absolute z-10 top-1/2 -left-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center border-2 border-purple-300 text-purple-300 p-6 rounded-full bg-white"
    onClick={onClick}
  >
    <i className="fas fa-chevron-left text-2xl"></i>
  </button>
);

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Nima",
      location: "New Castle",
      text: "I've been able to save more money and feel more in control of my finances. I would definitely recommend this app to anyone who wants to take control of their finances.",
      img: person1,
    },
    {
      name: "Chamlkra Shevin",
      location: "London",
      text: "It's been a game changer for me. Before, I would often overspend without realizing it. But with this app, I can easily see where my money is going and set budgets to stay on track.",
      img: person2,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 840,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 390,
        settings: { slidesToShow: 1 },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-services relative">
      <div data-aos="fade-right" className="card_space container mx-auto text-center relative px-4  lg:px-40">
        <h2 className="text-2xl font-bold mb-12">
          See what our customers have to say
        </h2>
        <Slider {...settings}  className="card_item">
          {testimonialsData.map((testimonial, i) => (
            <div key={i} className="card p-8 bg-white rounded-3xl text-left">
              <h3 className="text-xl font-semibold mb-4">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="item_down flex items-center justify-between">
                <div className="flex ">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-purple-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <i key={starIndex} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
