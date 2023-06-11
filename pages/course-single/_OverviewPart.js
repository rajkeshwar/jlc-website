import Loading from "@/components/Loading";
import { get } from "lodash-es";
import React from "react";

const OverviewPart = ({ overview }) => {
  if (!overview) return <Loading/>
  return (
    <div className="content white-bg pt-30">
      <div className="course-overview">
        <div className="inner-box">
          <h4>{get(overview, 'name', '-')}</h4>
          <div dangerouslySetInnerHTML={{ __html: get(overview, 'description','-') }}></div>
          <ul className="student-list">
            <li>{get(overview, 'reveiws.totalStudents', '-')} Total Students</li>
            <li>
              <span className="theme_color">
                {get(overview, 'reveiws.ratings.value', '-')}
              </span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span> (
              {get(overview, 'reveiws.ratings.total', '-')} Rating
            </li>
            <li>{get(overview, 'reveiws.count', '-')} Reviews</li>
          </ul>
          <h3>What you’ll learn?</h3>
          <ul className="review-list">
            {get(overview, 'whatYouWillLearn', []).map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
          <h3>Requirements</h3>
          <ul className="review-list">
            {get(overview, 'requirements', []).map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewPart;
