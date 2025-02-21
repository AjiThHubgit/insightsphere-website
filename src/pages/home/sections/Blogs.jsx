import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { GoArrowRight } from "react-icons/go";
import blogImg from "../../../images/it-case-study-resource-image.png";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow left" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow right" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

function Blogs() {
  // Define blog content array
  const blogs = [
    {
      id: 1,
      category: "Web Development",
      title: "The Future of Web Development: Trends to Watch in 2025",
      description: "Explore the latest trends in web development, including AI-driven solutions, headless CMS, and modern JavaScript frameworks.",
      img: blogImg,
    },
    {
      id: 2,
      category: "Performance Optimization",
      title: "Optimizing Website Performance: Best Practices for Speed & SEO",
      description: "A slow website can hurt user experience and SEO. Learn how to improve loading times, optimize images, and boost your Core Web Vitals.",
      img: blogImg,
    },
    {
      id: 3,
      category: "UX/UI Design",
      title: "The Importance of UX/UI Design in Website Success",
      description: "Good design goes beyond looks. Discover how UX/UI design impacts engagement, conversions, and customer retention.",
      img: blogImg,
    },
    {
      id: 4,
      category: "SEO & Digital Marketing",
      title: "Mastering SEO: Strategies to Rank Higher in 2025",
      description: "From keyword research to technical SEO, learn the best strategies to boost your search engine rankings and organic traffic.",
      img: blogImg,
    },
    {
      id: 5,
      category: "E-commerce Development",
      title: "Building a Scalable E-commerce Website: What You Need to Know",
      description: "Explore the essential elements of a successful e-commerce platform, from payment gateways to UX design and security.",
      img: blogImg,
    },
    {
      id: 6,
      category: "Cybersecurity",
      title: "Website Security in 2025: How to Protect Your Business Online",
      description: "Learn about the latest cybersecurity threats and best practices to secure your website against attacks and data breaches.",
      img: blogImg,
    },
    {
      id: 7,
      category: "AI & Automation",
      title: "How AI is Transforming Web Development & User Experience",
      description: "Discover how artificial intelligence and automation are changing the way websites are built, maintained, and optimized.",
      img: blogImg,
    },
    {
      id: 8,
      category: "Mobile & Responsive Design",
      title: "Why Mobile-First Design is Essential for Modern Websites",
      description: "With mobile traffic surpassing desktop, learn how to create responsive websites that deliver a seamless experience on all devices.",
      img: blogImg,
    },
  ];
  

  // Slick settings
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: blogs.length > 3,
    arrows: blogs.length > 1,
    nextArrow: blogs.length > 1 ? <NextArrow /> : null,
    prevArrow: blogs.length > 1 ? <PrevArrow /> : null,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="cf bg-lb">
      <div className="cwrapper">
        <section className="blogs-wrapper">
          <div style={{marginBottom: '80px'}}>
            <h1 className="mb-0">Our Blogs</h1>
            <p className="st-color mb-4">Insights, Ideas, and Inspiration</p>

          </div>
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="pe-4 flex-grow-1 d-flex">
                <div className="slider-item flex-grow-1 d-flex">
                  <div className="card-wrapper flex-grow-1">
                    <div className="img-wrapper">
                      <img src={blog.img} alt="blog image" />
                    </div>
                    <div className="content-wrapper">
                      <p className="p-small">
                        <span className="tags-wrapper">{blog.category}</span>
                      </p>
                      <div>
                        <h3 className="card-title mb-3">{blog.title}</h3>
                        <p className="card-description mb-4">{blog.description}</p>
                        <button className="btn ps-0">
                          Read More <GoArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default Blogs;
