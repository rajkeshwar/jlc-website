import CourseSingle from "@/pages/course-single";
import { API_URL } from "@/utils/ssr";
import fetch from "node-fetch";

const CourseDetails = ({ course }) => {
  return <CourseSingle course={course} />;
};

export default CourseDetails;

export async function getStaticProps({ params }) {

  const courseResp = await fetch(API_URL + "/java-fullstack-course");
  const course = await courseResp.json();

  return { props: { course } };
}

export async function getStaticPaths() {
  const slugFn = (slug) => ({ params: { slug } });
  return {
    paths: ["java-fullstack-course"].map(slugFn),
    fallback: true,
  };
}
