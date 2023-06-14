import CourseSingleTwo from "@/components/Courses/CourseSingleTwo";
import Loading from "@/components/Loading";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CoursePart = ({ courses, categories }) => {
  if (!courses) return <Loading />;

  const [allCourses, setAllCourses] = useState(courses);

  const handleTab = ({ categoryName }) => {
    setAllCourses(() =>
      categoryName === "All"
        ? courses
        : courses.filter(
            ({ courseCategory }) => courseCategory === categoryName
          )
    );
  };

  return (
    <div
      id="rs-popular-course"
      className="rs-popular-courses style1 orange-style pt-100 pb-100 md-pt-70 md-pb-50"
    >
      <div className="container">
        <Tabs>
          <TabList className="gridFilter text-center mb-50 md-mb-30">
            {categories.map((category) => (
              <Tab key={category.catId} onClick={() => handleTab(category)}>
                <button>
                  {category.categoryName} ({category.courseCount})
                </button>
              </Tab>
            ))}
          </TabList>

          {categories.map((_, index) => (
            <TabPanel key={index}>
              <div className="row ">
                {allCourses.map((course) => (
                  <div className="col-lg-4 col-md-6" key={course.courseId}>
                    <CourseSingleTwo
                      course={course}
                      courseClass="courses-item mb-30"
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
