import CourseSingle from "@/pages/course-single";
import { getFileContent, getFilePaths } from "@/utils/ssr";
import { join } from "path";

const COURSE_PATH = join(process.cwd(), "data/courses");

const CourseDetails = ({ course }) => {
  return <CourseSingle course={course} />;
};

export default CourseDetails;

export async function getStaticProps({ params }) {
  const fullPath = join(COURSE_PATH, params.slug + ".yml");
  const course = getFileContent(fullPath);
  return { props: { course } };
}

export async function getStaticPaths() {
  const paths = getFilePaths().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}
