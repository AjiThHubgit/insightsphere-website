import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import blueQuote from "../../../images/quote-blue.png";

function Testimonials() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonials data array with real user feedback
  const testimonials = [
    {
      id: 1,
      feedback:
        "The services provided by this company have completely transformed our digital strategy. Their data-driven insights helped us optimize our campaigns and achieve better results.",
      author: "Leonard C.",
    },
    {
      id: 2,
      feedback:
        "The blog section on their website is a goldmine of valuable information! It keeps us updated with the latest trends in analytics and digital marketing, making decision-making easier.",
      author: "Samantha R.",
    },
    {
      id: 3,
      feedback:
        "Navigating the website is incredibly smooth and user-friendly. From booking appointments to exploring services, the experience has been seamless and highly efficient.",
      author: "Michael T.",
    },
    {
      id: 4,
      feedback:
        "Their products are top-notch! The dashboard they designed for us has significantly improved our workflow, allowing us to monitor and analyze our data with ease.",
      author: "Jessica M.",
    },
  ];

  // Slick Slider settings for smooth transition between testimonials
  const settings = {
    dots: false, // Disables default navigation dots
    infinite: true, // Enables infinite scrolling
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Shows one slide at a time
    slidesToScroll: 1, // Scrolls one slide at a time
    afterChange: (index) => setCurrentSlide(index), // Updates active slide index
  };

  // Function to navigate to the next testimonial
  const goToNext = () => {
    if (sliderRef.current) {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length); // Updates active slide
      sliderRef.current.slickNext();
    }
  };

  // Function to navigate to the previous testimonial
  const goToPrev = () => {
    if (sliderRef.current) {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length); // Updates active slide
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="cwrapper smtb-70">
      <div className="testimonial-wrapper">

      <h1 className="mb-0">Testimonials</h1>
      <p className="st-color mb-5">
        Discover what our clients say about our services, blogs, website usability, and products.
      </p>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="content-wrapper">
              <img src={blueQuote} alt="blue quotes" width={35} className="mb-4" />
              <h3 className="testimonial-title mb-4">{testimonial.feedback}</h3>
              <h4 className="testimonial-description mb-4">{testimonial.author}</h4>
            </div>
          ))}
        </Slider>

        {/* Slider Controls */}
        <div className="slider-controls d-flex gap-4 justify-content-center">
          {/* Previous Slide Button */}
          <button className="prev-btn" onClick={goToPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Custom Dots Navigation */}
          <div className="custom-dots d-flex align-items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot-btn ${index === currentSlide ? "active" : ""}`}
                onClick={() => {
                  if (sliderRef.current) {
                    setCurrentSlide(index); // Updates active slide index
                    sliderRef.current.slickGoTo(index);
                  }
                }}
              ></button>
            ))}
          </div>

          {/* Next Slide Button */}
          <button className="next-btn" onClick={goToNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
