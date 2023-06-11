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

import PostContent from "@/components/Widget/PostContent";
import { getFilePaths } from "@/utils/ssr";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";
import slugify from "slugify";

const SinglePostRightSidebar = ({ blog }) => {
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
        pageTitle="Single Post Right Sidebar"
        pageName="Blog"
        breadcrumbsImg={`/img/breadcrumbs/5.jpg`}
      />

      {/* Blog Details Start */}
      <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-last">
              <div className="widget-area">
                <SinglePostSidebar />
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

const markdownMap = new Map();

export async function getStaticProps({ params }) {
  // const fullPath = join("data", "blogs", `${params.slug}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // // Use remark to convert markdown into HTML string
  // const content = await remark()
  //   .use(html)
  //   .process(matterResult.content);

  // const htmlContent = content.toString();

  // // Combine the data with the id and contentHtml
  // const postData = {
  //   id: params.slug,
  //   htmlContent,
  //   ...matterResult.data,
  // };

  console.log('slug ======= ', params.slug)

  const blog = await getMarkdownContent(params.slug);
  return {
    props: {
      blog
    },
  };
}

export async function getStaticPaths() {
  const paths = await getFilePaths("blogs").map(async (slug) => {
    const resp = await getMarkdownContent(slug);
    console.log("resp ", resp.slug);
    return await resp.slug;
  });

  return {
    paths: paths.filter((path) => path).map(async (slug) => {
      console.log('slug ', slug)
      return { params: { slug: await slug } }
    }),
    fallback: true,
  };
}

async function getMarkdownContent(slug) {
  const fullPath = join("data", "blogs", `${slug}.md`);

  if (markdownMap.has(fullPath)) {
    return await markdownMap.get(fullPath);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const htmlContent = await remark().use(html).process(content).toString();

  // Combine the data with the id and contentHtml
  const fileData = {
    id: slug,
    htmlContent,
    fontmatter: data,
    slug: slugify(data.title),
  };

  markdownMap.set(fullPath, fileData);

  return await markdownMap.get(fullPath);
}
