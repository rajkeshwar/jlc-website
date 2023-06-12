import React from "react";
import Link from 'next/link';
import SectionTitle from "@/components/Common/SectionTitle";
import CategoriesSingleTwo from "@/components/Categories/CategoriesSingleTwo";

const categories = [
  {
    title: "General Education",
    icon: "img/categories/icons/1.png",
    quantity: 3,
  },
  {
    title: "Computer Science",
    icon: "img/categories/icons/2.png",
    quantity: 2,
  },
  {
    title: "Civil Engineering",
    icon: "img/categories/icons/3.png",
    quantity: 5,
  },
  {
    title: "Artificial Intelligence",
    icon: "img/categories/icons/4.png",
    quantity: 6,
  },
  {
    title: "Business Studies",
    icon: "img/categories/icons/5.png",
    quantity: 7,
  },
  {
    title: "Web Development",
    icon: "img/categories/icons/6.png",
    quantity: 8,
  },
  {
    title: "Life Course",
    icon: "img/categories/icons/7.png",
    quantity: 9,
  },
  {
    title: "Lawyer Course",
    icon: "img/categories/icons/8.png",
    quantity: 10,
  },
  {
    title: "Recipes",
    icon: "img/categories/icons/9.png",
    quantity: 11,
  },
];

const Categories = () => {
  return (
    <div className="rs-categories gray-bg style1 pt-94 pb-70 md-pt-64 md-pb-40">
      <div className="container">
        <div className="row y-middle mb-50 md-mb-30">
          <div className="col-md-6 sm-mb-30">
            <SectionTitle
              sectionClass="sec-title"
              subtitleClass="sub-title primary"
              subtitle="Subject Categories"
              titleClass="title mb-0"
              title="Our Top Categories"
            />
          </div>
          <div className="col-md-6">
            <div className="btn-part text-right sm-text-left">
              <Link href="courses" className="readon">View All Categories</Link>
            </div>
          </div>
        </div>

        <div className="row">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-6 mb-30" key={index}>
              <CategoriesSingleTwo
                categoriesClass="categories-item"
                title={category.title}
                quantity={category.quantity}
                iconImg={category.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
