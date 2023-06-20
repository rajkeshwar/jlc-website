import React from 'react';
import CourseDetailsPlain from './CourseDetailsPlain';
import CourseSidebar from './_CourseSidebar';

const CourseDetailsPart = () => {

    return (
        <React.Fragment>
            <div className="intro-section gray-bg pt-94 pb-100 md-pt-80 md-pb-80 loaded">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-8 md-mb-50">
                            <CourseDetailsPlain />
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