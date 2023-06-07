import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CourseSingleTwo from "@/components/Courses/CourseSingleTwo";

const courseTabList = [
    'All', 'Science', 'Business', 'Humanities', 'Diploma'
];

const CoursePart = ({courses}) => {

  const tabStyle = "gridFilter text-center mb-50 md-mb-30";

  return (
    <div
      id="rs-popular-course"
      className="rs-popular-courses style1 orange-style pt-100 pb-100 md-pt-70 md-pb-50"
    >
      <div className="container">
        <Tabs>
          <TabList className={tabStyle}>
            {courseTabList.map((tabName, index) => (
                <Tab key={index}><button>{tabName}</button></Tab>
            ))}
          </TabList>

          {courseTabList.map((_, index) => (
            <TabPanel key={index}>
              <div className="row ">
                {courses.map((course, idx) => (
                  <div className="col-lg-4 col-md-6" key={idx}>
                    <CourseSingleTwo
                      courseClass="courses-item mb-30"
                      courseImg={course.image}
                      courseTitle={course.title}
                      coursePrice="$40.00"
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}

        </Tabs>
      </div>
    </div>
  );
};

export default CoursePart;
