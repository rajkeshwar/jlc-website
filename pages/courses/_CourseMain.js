import React from "react";
import CoursePart from "./_CourseSection";
import ScrollToTop from "@/components/Common/ScrollTop";

const CourseMain = ({ courses, categories }) => {
  return (
    <React.Fragment>
      {/* CoursePart Start */}
      <CoursePart courses={courses} categories={categories}/>
      {/* CoursePart End */}

      {/* scrolltop-start */}
      <ScrollToTop scrollClassName="scrollup orange-color" />
      {/* scrolltop-end */}
    </React.Fragment>
  );
};

export default CourseMain;
