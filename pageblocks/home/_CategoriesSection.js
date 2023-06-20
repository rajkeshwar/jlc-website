import React from "react";
import Link from 'next/link';
import SectionTitle from "@/components/Common/SectionTitle";
import CategoriesSingleTwo from "@/components/Categories/CategoriesSingleTwo";
import { random, range } from "lodash-es";
import Loading from "@/components/Loading";

const Categories = ({ categories }) => {
  
  if (!categories) return <Loading/>

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
          {categories.map((category) => (
            <div className="col-lg-4 col-md-6 mb-30" key={category.catId}>
              <CategoriesSingleTwo
                categoriesClass="categories-item"
                category={category}
                iconImg={`/img/categories/icons/${random(1, 9)}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
