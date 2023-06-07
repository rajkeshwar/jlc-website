import React from "react";
import Slider from "react-slick";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleTestimonial from "@/components/Testimonial/SingleTestimonial";

const testimonials = [
  {
    description:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
    icon: "img/testimonial/style5/1.png",
  },
  {
    description:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
    icon: "img/testimonial/style5/2.png",
  },
  {
    description:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
    icon: "img/testimonial/style5/3.png",
  },
];

const Testimonial = () => {
  const testimonialSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="rs-testimonial home-style1 pt-100 pb-150 md-pt-70 md-pb-70">
        <div className="container">
          <SectionTitle
            sectionClass="sec-title mb-50 md-mb-30 text-center"
            subtitleClass="sub-title primary"
            subtitle="Testimonial"
            titleClass="title mb-0"
            title="What Students Saying"
          />
          <Slider {...testimonialSettings}>
            {testimonials.map((testim, idx) => (
              <SingleTestimonial
                key={idx}
                itemClass="testi-item"
                quoteImage={`img/testimonial/style5/quote2.png`}
                authorImage={testim.icon}
                Title="David Warner"
                Designation="Web Developer"
                Description={testim.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
