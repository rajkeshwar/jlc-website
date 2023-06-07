import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CourseSingleTwo from "@/components/Courses/CourseSingleTwo";

const courses = [
  {
    title: "Web Development",
    image: "img/courses/1.jpg",
  },
  {
    title: "Artificial Intelligence Fundamental Startup Learn",
    image: "img/courses/2.jpg",
  },
  {
    title: "Web Development",
    image: "img/courses/3.jpg",
  },
  {
    title: "Computer Fundamentals Basic Startup Ultricies Vitae",
    image: "img/courses/4.jpg",
  },
  {
    title: "Web Development",
    image: "img/courses/5.jpg",
  },
  {
    title: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
    image: "img/courses/6.jpg",
  },
  {
    title: "Web Development",
    image: "img/courses/7.jpg",
  },
  {
    title: "Certified Graphic Design with Free Project Course",
    image: "img/courses/1.jpg",
  },
  {
    title: "Web Development",
    image: "img/courses/2.jpg",
  },
  {
    title: "Database Management Course For Beginners",
    image: "img/courses/3.jpg",
  },
  {
    title: "Web Development",
    image: "img/courses/4.jpg",
  },
  {
    title: "Student want to learn about science and arts",
    image: "img/courses/5.jpg",
  },
];

const courseTabList = [
    'All', 'Science', 'Business', 'Humanities', 'Diploma'
];

const CoursePart = (props) => {

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
