import React from "react";
import SinglePostSidebar from "./_SinglePostSidebar";
import SinglePostSix from "@/components/Blog/SinglePostSix";

const BlogMain = ({ blogs }) => {
  return (
    <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-70 md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 order-last">
            <div className="widget-area">
              <SinglePostSidebar />
            </div>
          </div>

          <div className="col-lg-8 pr-50 md-pr-16">
            <div className="row">
              {blogs.map((blog, idx) => (
                <div className="col-lg-12 mb-70 md-mb-50" key={idx}>
                  <SinglePostSix
                    blog={blog}
                    blogAuthor="Admin"
                    blogCategory="University"
                    blogPublishedDate="January 21, 2022"
                    blogTitle={blog.routeLink}
                    blogDesc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... "
                    blogButtonClass="blog-button"
                    blogButtonText="Continue Reading"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
