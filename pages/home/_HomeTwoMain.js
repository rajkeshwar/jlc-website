import BannerDefault from '@/components/Banner/BannerDefault';
import ScrollToTop from '@/components/Common/ScrollTop';
import React from 'react';
import About from './_AboutSection';
import Blog from './_BlogSection';
import Categories from './_CategoriesSection';
import Courses from './_CourseSection';
import CTA from './_CtaSection';
import Faq from './_FaqSection';
import Testimonial from './_TestimonialSection';

const HomeTwoMain = () => {
	return (
		<React.Fragment>
			{/* Banner-area-start */}
			<BannerDefault />
			{/* Banner-area-end */}

			{/* about-area-start */}
			<About />
			{/* about-area-end */}

			{/* Categories-area-start */}
			<Categories />
			{/* Categories-area-end */}

			{/* Course-area-start */}
			<Courses />
			{/* Course-area-end */}

			{/* call us section start */}
			<CTA />
			{/* call us section end */}

			{/* Faq section start */}
			<Faq />
			{/* Faq section end */}

			{/* testmonial-area-start */}
			<Testimonial /> 
			{/* testmonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTwoMain;