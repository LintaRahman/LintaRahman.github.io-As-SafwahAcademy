import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgImage from "../../assets/images/HeaderBg.jpg";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <>
      <Navbar />
      <Header text={course.title} img={bgImage} />
      {/* <Link to={`/policies/${course.id}`}>{course.title}</Link> */}
      <section className="pgcontainer">
        <h1>{course.title}</h1>
        {course.content}
      </section>

      <Footer />
    </>
  );
};

export default Course;
