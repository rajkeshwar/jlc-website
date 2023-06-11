import React from 'react';
import CourseSidebar from './_CourseSidebar';
import CourseDetailsTab from './_CourseDetailsTab';

const CourseDetailsPart = () => {

    return (
        <React.Fragment>
            <div className="intro-section gray-bg pt-94 pb-100 md-pt-80 md-pb-80 loaded">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-8 md-mb-50">
                            <CourseDetailsTab />
                        </div>
                        <div className="video-column col-lg-4">
                            <CourseSidebar />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default CourseDetailsPart;