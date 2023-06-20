import CourseSingle from "@/pages/course-single";
import { API_URL } from "@/utils/ssr";
import { keyBy } from "lodash-es";
import fetch from "node-fetch";

const CourseDetails = ({ course }) => {
  return <CourseSingle course={course} />;
};

export default CourseDetails;

let coursesMap = {};

export async function getStaticProps({ params }) {

  const courseId = 202 // coursesMap[params.slug];

  const courseResp = await fetch(API_URL + "/myapi/mycourse-details/" + courseId);
  const course = await courseResp.json();

  return { props: { course } };
}

export async function getStaticPaths() {
  const coursesResp = await fetch(API_URL + '/myapi/mycourses');
  const courses = await coursesResp.json();

  coursesMap = keyBy(courses, 'courseURL');

  const slugFn = (course) => ({ params: { slug: course.courseURL } });
  return {
    paths: courses.map(slugFn),
    fallback: true,
  };
}
