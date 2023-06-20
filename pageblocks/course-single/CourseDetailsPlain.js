
import Loading from "@/components/Loading";
import { CourseContext } from "@/conext/context";
import { useContext } from "react";
import CurriculumPart from "./_CurriculumPart";
import FaqPart from "./_FaqPart";
import InstructorPart from "./_InstructorPart";
import OverviewPart from "./_OverviewPart";
import ReviewPart from "./_ReviewPart";
import About from "../home/_AboutSection";

const CourseDetailsPlain = () => {
  const course = useContext(CourseContext);

  if (!course) return <Loading />;

  return (
    <div className="intro-info-tabs">
      <OverviewPart courseOverview={course.courseOverview} courseName={course.courseName}/>
      <CurriculumPart courseModules={course.courseModules} />
      <InstructorPart />
      <FaqPart courseFAQs={course.courseFAQs}/>
      <ReviewPart courseReviews={course.courseReviews}/>
    </div>
  );
};

export default CourseDetailsPlain;
