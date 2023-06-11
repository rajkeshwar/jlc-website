import React from "react";
import Link from "next/link";
import Loading from "../Loading";

const CategoriesWidget = ({ categories }) => {
  if (!categories) return <Loading />;
  
  return (
    <div className="widget-archives mb-50">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>
            <Link href={`/blogs?category=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
