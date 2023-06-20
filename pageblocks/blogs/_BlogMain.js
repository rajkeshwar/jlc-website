import SinglePostSix from "@/components/Blog/SinglePostSix";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SinglePostSidebar from "./_SinglePostSidebar";
import Loading from "@/components/Loading";

const BlogMain = ({ blogs, categories }) => {
  const [blogsByCategories, setBlogsByCategories] = useState(blogs);
  const router = useRouter();

  useEffect(() => {
    if (!location.search) return;

    const handleRouteChange = (url) => {
      const { category } = router.query;

      setBlogsByCategories(() =>
        blogs.filter((blog) => (!category ? true : blog.category === category))
      );
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  if (!(blogs && categories)) return <Loading/>

  return (
    <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-70 md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 order-last">
            <div className="widget-area">
              <SinglePostSidebar blogs={blogs} categories={categories} />
            </div>
          </div>

          <div className="col-lg-8 pr-50 md-pr-16">
            <div className="row">
              {blogsByCategories.map((blog, idx) => (
                <div className="col-lg-12 mb-70 md-mb-50" key={idx}>
                  <SinglePostSix blog={blog} />
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
