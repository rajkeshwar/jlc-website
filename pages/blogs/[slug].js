import SiteBreadcrumb from "@/components/Common/Breadcumb";
import Newsletter from "@/components/Common/Newsletter";
import ScrollToTop from "@/components/Common/ScrollTop";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import OffWrap from "@/components/Layout/Header/OffWrap";
import React from "react";
import SinglePostSidebar from "./_SinglePostSidebar";

// Image
import Logo from "@/assets/img/logo/dark-logo.png";
import footerLogo from "@/assets/img/logo/lite-logo.png";

// Breadcrumbs Background Image

import Loading from "@/components/Loading";
import PostContent from "@/components/Widget/PostContent";
import { titleSlugify } from "@/utils/common";
import { getAllBlogs } from "@/utils/ssr";
import { keyBy, values } from "lodash-es";

const SinglePostRightSidebar = ({ blog, blogs, categories }) => {
  if (!blog) return <Loading />;

  return (
    <React.Fragment>
      <OffWrap />
      <Header
        parentMenu="blog"
        secondParentMenu="blogSingle"
        headerNormalLogo={Logo}
        headerStickyLogo={Logo}
        mobileNormalLogo={Logo}
        CanvasLogo={Logo}
        CanvasClass="right_menu_togle hidden-md"
        headerClass="full-width-header header-style1 home8-style4"
        TopBar="enable"
        TopBarClass="topbar-area home8-topbar"
        emailAddress="support@website.com"
        Location="374 William S Canning Blvd, MA 2721, USA "
      />

      <SiteBreadcrumb
        pageTitle={blog.title}
        pageName="Blog"
        breadcrumbsImg={`/img/breadcrumbs/5.jpg`}
      />

      {/* Blog Details Start */}
      <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-last">
              <div className="widget-area">
                <SinglePostSidebar blogs={blogs} categories={categories}/>
              </div>
            </div>
            <div className="col-lg-8 pr-50 md-pr-14">
              <PostContent blog={blog} />
            </div>
          </div>
        </div>
      </div>
      {/* Blog Details End */}

      <Newsletter
        sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
        titleClass="title mb-0 white-color"
      />

      <Footer
        footerClass="rs-footer home9-style main-home"
        footerLogo={footerLogo}
      />

      {/* scrolltop-start */}
      <ScrollToTop scrollClassName="scrollup orange-color" />
      {/* scrolltop-end */}
    </React.Fragment>
  );
};

export default SinglePostRightSidebar;

export async function getStaticProps({ params }) {
  const cachedBlogs = await getAllBlogs();
  const cachedBlogMap = keyBy(cachedBlogs, "routeLink");
  const blogCategories = cachedBlogs.map(blog => blog.category)

  return {
    props: {
      blog: cachedBlogMap[params.slug],
      blogs: values(cachedBlogMap),
      categories: [...new Set(blogCategories)]
    },
  };
}

export async function getStaticPaths() {
  const blogPaths = (await getAllBlogs()).map((blog) => {
    return { params: { slug: titleSlugify(blog.title) } };
  });

  return {
    paths: blogPaths,
    fallback: true,
  };
}
