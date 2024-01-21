import React from 'react';
import { useParams } from 'react-router-dom';
import Course from '../../components/Course/Course';
import coursesList from "../../assets/docs/Courses"
//  const policiesList = [
//     { id: 'enrol', title: "Enrolment", content: "Lorem Ipsum" },
//     { id: 'uniform',title: "Uniform", content: "Lorem Ipsum" },
//     { id: 'behaviour',title: "Behaviour", content: "Lorem Ipsum" },
//   ];

const CoursePage = () => {
  const { courseId } = useParams();
  const course = coursesList.find((p) => p.id === courseId);

  if (!course) {
    return <div>Policy not found</div>;
  }

  return (
    <div>
      {/* <h1>{course.title}</h1> */}
      <Course course={course} />
    </div>
  );
};

export default CoursePage;
