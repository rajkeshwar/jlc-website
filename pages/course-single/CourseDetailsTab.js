import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import CurriculumPart from "./CurriculumPart";
import FaqPart from "./FaqPart";
import InstructorPart from "./InstructorPart";
import OverviewPart from "./OverviewPart";
import ReviewPart from "./ReviewPart";

const CourseDetailsTab = () => {
  const tabStyle = "intro-tabs tabs-box";
  const courseDetailsTabs = [
    "Overview",
    "Curriculum",
    "Instructor",
    "Faq",
    "Reviews",
  ];

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
          <OverviewPart />
        </TabPanel>

        <TabPanel>
          <CurriculumPart />
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
