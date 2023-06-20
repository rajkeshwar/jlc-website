import Loading from "@/components/Loading";
import { get } from "lodash-es";
import React from "react";

const OverviewPart = ({ courseOverview, courseName }) => {
  if (!courseOverview) return <Loading/>
  return (
    <div className="content white-bg pt-30 mb-30">
      <div className="course-overview">
        <div className="inner-box">
          <h4>{courseName || '-'}</h4>
          <div dangerouslySetInnerHTML={{ __html: get(courseOverview, 'description1','-') }}></div>
          <div dangerouslySetInnerHTML={{ __html: get(courseOverview, 'description2','-') }}></div>
          <ul className="student-list" hidden>
            <li>{get(courseOverview, 'reveiws.totalStudents', '-')} Total Students</li>
            <li>
              <span className="theme_color">
                {get(courseOverview, 'reveiws.ratings.value', '-')}
              </span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span> (
              {get(courseOverview, 'reveiws.ratings.total', '-')} Rating
            </li>
            <li>{get(courseOverview, 'reveiws.count', '-')} Reviews</li>
          </ul>
          <h3>Key Highlights</h3>
          <ul className="review-list">
            {get(courseOverview, 'keyHighlights', []).map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
          <h3>Who can take this course</h3>
          <ul className="review-list">
            {get(courseOverview, 'whoCanTake', []).map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewPart;
