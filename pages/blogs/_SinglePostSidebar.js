import CategoriesWidget from "@/components/Widget/CategoriesWidget";
import RecentPost from "@/components/Widget/RecentPost";

const SinglePostSidebar = ({ blogs, categories }) => {
  return (
    <>
      <RecentPost blogs={blogs} />
      <CategoriesWidget categories={categories} />
    </>
  );
};

export default SinglePostSidebar;
