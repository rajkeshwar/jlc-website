import React from "react";
import Link from "next/link";

const CategoriesSingleTwo = ({ category, iconImg }) => {
  const { categoryName, courseCount } = category;
  return (
    <Link className={"categories-item"} href={"/course-categories"}>
      <div className="icon-part">
        <img src={iconImg} alt={categoryName} />
      </div>
      <div className="content-part">
        <h4 className="title">{categoryName}</h4>
        <span className="courses">{courseCount} Courses</span>
      </div>
    </Link>
  );
};

export default CategoriesSingleTwo;
