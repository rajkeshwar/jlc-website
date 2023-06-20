import React from "react";
import SiteBreadcrumb from "@/components/Common/Breadcumb";
import Newsletter from "@/components/Common/Newsletter";
import ScrollToTop from "@/components/Common/ScrollTop";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import OffWrap from "@/components/Layout/Header/OffWrap";
import { BlogsContext } from "@/conext/context";
import { getAllBlogs } from "@/utils/ssr";
import BlogMain from "@/pageblocks/blogs/_BlogMain";

// Image
const Logo = "/img/logo/dark-logo.png";
const footerLogo = "/img/logo/lite-logo.png";
const bannerbg = "/img/breadcrumbs/2.jpg";

const Blog = ({ blogs, categories }) => {
  return (
    <React.Fragment>
      <BlogsContext.Provider value={blogs}>
        <OffWrap />
        <Header
          parentMenu="blog"
          headerNormalLogo={Logo}
          headerStickyLogo={Logo}
          CanvasLogo={Logo}
          mobileNormalLogo={Logo}
          CanvasClass="right_menu_togle hidden-md"
          headerClass="full-width-header header-style1 home8-style4"
          TopBar="enable"
          TopBarClass="topbar-area dark-primary-bg hidden-md"
          emailAddress="hello@javalearningcenter.com"
          phoneNumber="+91-8105815599"
        />

        {/* breadcrumb-area-start */}
        <SiteBreadcrumb
          pageTitle="Blogs"
          pageName="Blogs"
          breadcrumbsImg={bannerbg}
        />
        {/* breadcrumb-area-End */}

        {/* Blog Main */}
        <BlogMain blogs={blogs} categories={categories}/>
        {/* Blog Main End */}

        <Newsletter
          sectionClass="rs-newsletter style1 orange-style mb--90 sm-mb-0 sm-pb-80"
          titleClass="title mb-0 white-color"
        />

        <Footer
          footerClass="rs-footer home9-style main-home"
          footerLogo={footerLogo}
        />

        {/* scrolltop-start */}
        <ScrollToTop scrollClassName="scrollup orange-color" />
        {/* scrolltop-end */}

        {/* <SearchModal /> */}
      </BlogsContext.Provider>
    </React.Fragment>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  const blogCategories = blogs.map((blog) => blog.category);
  const categories = [...new Set(blogCategories)];

  return { props: { blogs, categories } };
}
