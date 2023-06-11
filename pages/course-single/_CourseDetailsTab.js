import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import CurriculumPart from "./_CurriculumPart";
import FaqPart from "./_FaqPart";
import InstructorPart from "./_InstructorPart";
import OverviewPart from "./_OverviewPart";
import ReviewPart from "./_ReviewPart";
import { useContext } from "react";
import { CourseContext } from "@/conext/context";
import Loading from "@/components/Loading";
import { COURSE_DETAILS_TABS } from "@/utils/constants";

const CourseDetailsTab = () => {

  const course = useContext(CourseContext);

  if (!course) return <Loading/>

  return (
    <div className="intro-info-tabs">
      <Tabs>
        <TabList className="intro-tabs tabs-box">
          {COURSE_DETAILS_TABS.map((tabName, index) => (
            <Tab key={index}>
              <button>{tabName}</button>
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <OverviewPart overview={course.overview}/>
        </TabPanel>

        <TabPanel>
          <CurriculumPart curriculum={course.curriculum}/>
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
