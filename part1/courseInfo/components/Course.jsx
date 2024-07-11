import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
  console.log(courses[0].name);
  return (
    <div>
      {courses.map((course) => {
        return (
          <div>
            <Header course={course} /> <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
