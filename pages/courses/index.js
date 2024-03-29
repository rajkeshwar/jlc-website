import SiteBreadcrumb from "@/components/Common/Breadcumb";
import Newsletter from "@/components/Common/Newsletter";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import OffWrap from "@/components/Layout/Header/OffWrap";
import { API_URL } from "@/utils/ssr";
import fetch from 'node-fetch';
import React from "react";
import CourseMain from "./_CourseMain";


const CourseTwo = ({ courses, categories }) => {
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
        TopBarClass="topbar-area dark-primary-bg hidden-md"
        emailAddress="hello@javalearningcenter.com"
        phoneNumber="+91-8105815599"
      />

      {/* breadcrumb-area-start */}
      <SiteBreadcrumb
        pageTitle="Course Grid 02"
        pageName="Course"
        breadcrumbsImg={`/img/breadcrumbs/2.jpg`}
      />
      {/* breadcrumb-area-start */}

      {/* Course Main */}
      <CourseMain courses={courses} categories={categories}/>
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

  const coursesResp = await fetch(API_URL + '/myapi/mycourses');
  const courses = await coursesResp.json();

  const categoriesResp = await fetch(API_URL + '/myapi/mycategories');
  const categories = await categoriesResp.json();

  return { props: { courses, categories } };
}
