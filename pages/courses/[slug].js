import CourseSingle from "@/pages/course-single";
import fs from "fs";
import { join } from "path";

const COURSE_PATH = join(process.cwd(), "data/courses");

const CourseDetails = ({ course }) => {
  return <CourseSingle course={course} />;
};

export default CourseDetails;

export async function getStaticProps({ params }) {
  console.log("params ", params);

  const fullPath = join(COURSE_PATH, params.slug + ".json");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return { props: { course: fileContents } };
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(COURSE_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.yml?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
}
