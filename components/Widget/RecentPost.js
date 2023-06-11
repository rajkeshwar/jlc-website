import Link from "next/link";
import Loading from "../Loading";

const RecentPost = ({blogs}) => {

  if (!blogs) return <Loading />;

  return (
    <div className="recent-posts-widget mb-50">
      <h3 className="widget-title">Recent Posts</h3>
      {(blogs || []).map((blog, idx) => (
        <div className="show-featured" key={idx}>
          <div className="post-desc">
            <Link href={`/blogs/${blog.routeLink}`}>{blog.title}</Link>
            <span className="date">
              <i className="fa fa-calendar"></i>
              {blog.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
