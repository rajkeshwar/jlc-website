import React from "react";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import OffWrap from "@/components/Layout/Header/OffWrap";
import SearchModal from "@/components/Layout/Header/SearchModal";
import Newsletter from "@/components/Common/Newsletter";
import SiteBreadcrumb from "@/components/Common/Breadcumb";
import CourseMain from "./_CourseMain";
import fs from "fs";
import { join } from "path";

const CourseTwo = ({ courses }) => {
  return (
    <React.Fragment>
      <OffWrap />
      <Header
        parentMenu="course"
        headerNormalLogo={`/img/logo/dark-logo.png`}
        headerStickyLogo={`/img/logo/dark-logo.png`}
        CanvasLogo={`/img/logo/dark-logo.png`}
        mobileNormalLogo={`/img/logo/dark-logo.png`}
        CanvasClass="right_menu_togle hidden-md"
        headerClass="full-width-header header-style1 home8-style4"
        TopBar="enable"
        TopBarClass="topbar-area home8-topbar"
        emailAddress="support@website.com"
        Location="374 William S Canning Blvd, MA 2721, USA "
      />

      {/* breadcrumb-area-start */}
      <SiteBreadcrumb
        pageTitle="Course Grid 02"
        pageName="Course"
        breadcrumbsImg={`/img/breadcrumbs/2.jpg`}
      />
      {/* breadcrumb-area-start */}

      {/* Course Main */}
      <CourseMain courses={courses} />
      {/* Course Main */}

      <Newsletter
        sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
        titleClass="title mb-0 white-color"
      />

      <Footer
        footerClass="rs-footer home9-style main-home"
        footerLogo={`/img/logo/lite-logo.png`}
      />
    </React.Fragment>
  );
};

export default CourseTwo;

export async function getStaticProps() {
  const COURSE_PATH = join(process.cwd(), "data/courses");

  const courses = fs
    .readdirSync(COURSE_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.(json|yml)?$/, ""))
    // Construct the course object from the path
    .map((course, idx) => ({
      image: `img/courses/${idx + 1}.jpg`,
      title: course,
    }));

  console.log("couresList ", courses);

  return { props: { courses } };
}
