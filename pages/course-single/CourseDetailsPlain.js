
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
      <OverviewPart overview={course.overview} />
      <CurriculumPart curriculum={course.curriculum} />
      <InstructorPart />
      <FaqPart />
      <ReviewPart />
    </div>
  );
};

export default CourseDetailsPlain;
