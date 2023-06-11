import Link from "next/link";
import clsx from "clsx";

const SinglePostSix = ({ blog, blogButtonClass, blogClass }) => {
  return (
    <div className={clsx(blogClass, "blog-item")}>
      <div className="blog-content">
        <h3 className="blog-title">
          <Link href={`/blogs/${blog.routeLink}`}>{blog.title}</Link>
        </h3>
        <div className="blog-meta">
          <ul className="btm-cate">
            <li>
              <div className="blog-date">
                <i className="fa fa-calendar-check-o"></i> {blog.date}
              </div>
            </li>
            <li>
              <div className="author">
                <i className="fa fa-user-o"></i> {blog.author}
              </div>
            </li>
            <li>
              <div className="tag-line">
                <i className="fa fa-book"></i>
                <Link href="/blogs">{blog.category}</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="blog-desc">{blog.description}</div>
        <div className={clsx("blog-button", blogButtonClass)}>
          <Link href={`/blogs/${blog.routeLink}`} className="blog-btn">
            Continue Reading...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePostSix;
