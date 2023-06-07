import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import CurriculumPart from "./_CurriculumPart";
import FaqPart from "./_FaqPart";
import InstructorPart from "./_InstructorPart";
import OverviewPart from "./_OverviewPart";
import ReviewPart from "./_ReviewPart";
// import { useContext } from "react";
// import { CourseContext } from "@/conext/context";

const CourseDetailsTab = ({course}) => {

  // const course = useContext(CourseContext);

  const tabStyle = "intro-tabs tabs-box";
  const courseDetailsTabs = [
    "Overview",
    "Curriculum",
    "Instructor",
    "Faq",
    "Reviews",
  ];

  console.log('course ======= ', course);

  // if (!course) return '';

  return (
    <div className="intro-info-tabs">
      <Tabs>
        <TabList className={tabStyle}>
          {courseDetailsTabs.map((tabName, index) => (
            <Tab key={index}>
              <button>{tabName}</button>
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <OverviewPart course={course}/>
        </TabPanel>

        <TabPanel>
          {/* <CurriculumPart course={course}/> */}
        </TabPanel>

        <TabPanel>
          <InstructorPart />
        </TabPanel>

        <TabPanel>
          <FaqPart />
        </TabPanel>

        <TabPanel>
          <ReviewPart />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CourseDetailsTab;
