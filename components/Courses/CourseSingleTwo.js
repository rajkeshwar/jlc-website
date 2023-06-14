import React, { useCallback } from "react";
import Link from "next/link";
import Loading from "../Loading";
import { random } from "lodash-es";

const CourseSingleTwo = ({ course }) => {
  if (!course) return <Loading />;

  const imageId = useCallback(() => random(1,10), []);

  return (
    <div className="courses-item">
      <div className="img-part">
        <img src={`/img/courses/${imageId()}.jpg`} alt={course.courseName} />
      </div>
      <div className="content-part">
        <ul className="meta-part">
          <li>
            <div className="flex-row">
              <div className="flex-1">
                <span className="original-price">₹ {course.price}</span>
                <span className="price">₹ {course.offerPrice}</span>
              </div>
              <Link className="categorie course-category" href={"course-categories"}>
                {course.courseCategory}
              </Link>
            </div>
          </li>
        </ul>
        <h3 className="title">
          <Link href={`/courses/${course.courseURL}`}>{course.courseName}</Link>
        </h3>
        <div className="bottom-part">
          <div className="info-meta">
            <ul>
              <li className="user">
                <i className="fa fa-user"></i> {course.enrollments}
              </li>
            </ul>
          </div>
          <div className="btn-part">
            <Link href={`/courses/${course.courseURL}`}>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSingleTwo;
