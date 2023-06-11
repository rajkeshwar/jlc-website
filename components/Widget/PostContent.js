import React, { useCallback, useEffect, useLayoutEffect } from "react";

const PostContent = ({ blog }) => {
  if (!blog) return "";

  useLayoutEffect(() => {
    Array.from(document.querySelectorAll('pre')).forEach(pre => {
      pre.classList.add('prettyprint');
      window.PR && PR.prettyPrint();
    })
  }, [])

  return (
    <div className="blog-deatails">
      <div className="blog-full">
        <div dangerouslySetInnerHTML={{ __html: blog.htmlContent }} />
      </div>
    </div>
  );
};

export default PostContent;
