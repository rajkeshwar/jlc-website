import React from 'react';
import Slider from "react-slick";
import SectionTitle from '@/components/Common/SectionTitle';
import SingleTestimonialThree from '@/components/Testimonial/SingleTestimonialThree';


// Testimonial Avatars
const author1 = 'img/testimonial/style3/1.png';
const author2 = 'img/testimonial/style3/2.png';
const author3 = 'img/testimonial/style3/3.png';
const author4 = 'img/testimonial/style3/4.png';
const author5 = 'img/testimonial/style3/5.png';

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
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-testimonial style3 orange-color pt-102 md-pt-70 pb-60">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title mb-60 text-center md-mb-30"
                        subtitleClass="sub-title orange"
                        subtitle="Student Reviews"
                        titleClass="title mb-0"
                        title="What Our Students Says"
                    />
                    <div className="row">
                        <Slider {...testimonialSettings}>
                            <SingleTestimonialThree
                                itemClass="testi-item"
                                authorImage={author1}
                                Title="David Warner"
                                Designation="Web Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonialThree
                                itemClass="testi-item"
                                authorImage={author2}
                                Title="Mitchel Starc"
                                Designation="App Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonialThree
                                itemClass="testi-item"
                                authorImage={author3}
                                Title="Steve Smith"
                                Designation="Web Designer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonialThree
                                itemClass="testi-item"
                                authorImage={author4}
                                Title="Bret Lee"
                                Designation="Client Manager"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonialThree
                                itemClass="testi-item"
                                authorImage={author5}
                                Title="Shan Warne"
                                Designation="Digital Marketar"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial