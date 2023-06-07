import { get } from "lodash-es";
import React from "react";

const OverviewPart = ({ course }) => {
  if (!course) return "";

console.log('course received ', course)

  return (
    <div className="content white-bg pt-30">
      <div className="course-overview">
        <div className="inner-box">
          <h4>{get(course, 'overview.name', '-')}</h4>
          <div dangerouslySetInnerHTML={{ __html: get(course, 'overview.description','-') }}></div>
          <ul className="student-list">
            <li>{get(course, 'overview.reveiws.totalStudents', '-')} Total Students</li>
            <li>
              <span className="theme_color">
                {get(course, 'overview.reveiws.ratings.value', '-')}
              </span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span> (
              {get(course, 'overview.reveiws.ratings.total', '-')} Rating
            </li>
            <li>{get(course, 'overview.reveiws.count', '-')} Reviews</li>
          </ul>
          <h3>What you’ll learn?</h3>
          <ul className="review-list">
            {get(course, 'overview.whatYouWillLearn', []).map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
          <h3>Requirements</h3>
          <ul className="review-list">
            {get(course, 'overview.requirements', []).map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewPart;
