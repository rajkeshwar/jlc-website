import CategoriesWidget from "@/components/Widget/CategoriesWidget";
import RecentPost from "@/components/Widget/RecentPost";

const SinglePostSidebar = ({ blogs, categories }) => {
  return (
    <>
      <CategoriesWidget categories={categories} />
      <RecentPost blogs={blogs} />
    </>
  );
};

export default SinglePostSidebar;
