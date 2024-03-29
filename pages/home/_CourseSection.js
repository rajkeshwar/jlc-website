import React from "react";
import Link from "next/link";

import SectionTitle from "@/components/Common/SectionTitle";
import CourseSingleTwo from "@/components/Courses/CourseSingleTwo";
import { courseList } from "@/utils/constants";
import Loading from "@/components/Loading";
// Courses Image

const bgStyle = {
  backgroundImage: `url(img/bg/home-8.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const Courses = ({ courses }) => {
  if (!courses) return <Loading />;
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
              <Link href="/courses" className="readon">
                View All Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {courses.slice(0, 6).map((course, idx) => (
            <div className="col-lg-4 col-md-6 mb-30" key={idx}>
              <CourseSingleTwo courseClass="courses-item" course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
