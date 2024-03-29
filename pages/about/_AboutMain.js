import React from 'react';
import Team from './_TeamSection';
import Blog from './_BlogSection';
import AboutVideo from './_VideoSection';
// import AboutCounter from './CounterSection';
// import Testimonial from './_TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';


const AboutMain = () => {

    return (
        <React.Fragment>
            {/* AboutCounter Start */}
            {/* <AboutCounter /> */}
            {/* AboutCounter End */}

            {/* AboutVideo Start */}
            <AboutVideo />
            {/* AboutVideo End */}

            {/* Team Section Start */}
            <Team />
            {/* Team Section End */}

            {/* Testimonial Section Start */}
            {/* <Testimonnpial /> */}
            {/* Testimonial Section End */}

            {/* Blog Section Start */}
            <Blog />
            {/* Blog Section End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default AboutMain;