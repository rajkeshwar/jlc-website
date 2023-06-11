import React from "react";
import Link from "next/link";

import SectionTitle from "@/components/Common/SectionTitle";
import CourseSingleTwo from "@/components/Courses/CourseSingleTwo";
// Courses Image

const courseList = [
  {
    title: "Fitness Development Strategy Buildup Laoreet",
    icon: "img/courses/home8/1.jpg",
  },
  {
    title: "The Art of Black and White Photography",
    icon: "img/courses/home8/2.jpg",
  },
  {
    title: "Fitness Development Strategy Buildup Laoreet",
    icon: "img/courses/home8/3.jpg",
  },
  {
    title: "Learn Python – Interactive Python Tutorial",
    icon: "img/courses/home8/4.jpg",
  },
  {
    title: "Fitness Development Strategy Buildup Laoreet",
    icon: "img/courses/home8/5.jpg",
  },
  {
    title: "Become a PHP Master and Make Money Fast",
    icon: "img/courses/home8/6.jpg",
  },
];

const bgStyle = {
  backgroundImage: `url(img/bg/home-8.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const Courses = () => {
  return (
    <div
      className="rs-popular-courses style1 pt-94 pb-70 md-pt-64 md-pb-40"
      style={bgStyle}
    >
      <div className="container">
        <div className="row y-middle mb-50 md-mb-30">
          <div className="col-md-6 sm-mb-30">
            <SectionTitle
              sectionClass="sec-title"
              subtitleClass="sub-title primary"
              subtitle="Top Courses"
              titleClass="title mb-0"
              title="Popular Courses"
            />
          </div>
          <div className="col-md-6">
            <div className="btn-part text-right sm-text-left">
              <Link href="/course" className="readon">
                View All Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {courseList.map((course, idx) => (
            <div className="col-lg-4 col-md-6 mb-30" key={idx}>
              <CourseSingleTwo
                courseClass="courses-item"
                courseImg={course.icon}
                courseTitle={course.title}
                coursePrice="$75"
                courseCategory="Web Developer"
                userCount="245"
                userRating="05"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
