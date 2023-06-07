import React from 'react';
import CourseDetailsPart from './_CourseDetailsPart';
import ScrollToTop from '@/components/Common/ScrollTop';

const CourseDetailsMain = ({course}) => {

    return (
        <React.Fragment>
            
            {/* CourseDetails Start */}
            <CourseDetailsPart course={course}/>
            {/* CourseDetails End */}

			{/* scrolltop-start */}
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
			{/* scrolltop-end */}

        </React.Fragment>
    )
}

export default CourseDetailsMain;