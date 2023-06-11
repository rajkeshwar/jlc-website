import React from "react";
import Link from "next/link";

const RECENT_POSTS = [
  "Covid-19 threats the generation",
  "Soundtrack filma Exclusive Music",
  "Soundtrack filma Exclusive Music",
  "Given void great you’re good",
  "Lights winged seasons fish",
  "High school program starting soon 2021",
  "Shutdown of schools extended to Aug 31 ",
];

const RecentPost = () => {
  return (
    <div className="recent-posts-widget mb-50">
      <h3 className="widget-title">Recent Posts</h3>
      {RECENT_POSTS.map((recent, idx) => (
        <div className="show-featured" key={idx}>
          <div className="post-desc">
            <Link href="/blog/single-post-right-sidebar">{recent}</Link>
            <span className="date">
              <i className="fa fa-calendar"></i>
              April 6, 2020
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
