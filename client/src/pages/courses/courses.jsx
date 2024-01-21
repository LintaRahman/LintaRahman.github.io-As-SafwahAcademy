import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/HeaderBg.jpg";
import { useParams } from "react-router-dom";
import coursesList from "../../assets/docs/Courses"
import {curriculum, TimeTable} from "../../assets/docs/Curriculum"
import './courses.css';
import TabGroup from "../../components/TabGroups/TabGroups";
import Table from "../../components/Table/Table";


const courses = () => {
  return (
    <>
      <Navbar />
      <Header text= "Course" img={bgImage} />
<section className="pgcontainer content-container">
  Our institute holds classes for students aged 4-16 years old.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente praesentium voluptas vel doloremque rerum quae velit, quas sed aut autem itaque quam voluptatibus laboriosam dolores repudiandae, alias nisi? Molestias.
</section>

      <section className="pgcontainer">
        <h1>Curriculum</h1>
        <TabGroup types={curriculum}/>
      </section>

      {/* Timetable */}
      <section className="pgcontainer">
        <h1>Class Timetable</h1>
        <p>Classes take place every Sunday at Pimlico Academy, 36 Lupus St, Pimlico, London SW1V 3AT.</p>
        <br/>
        <Table Data={TimeTable} />
        <br/>
        <p>See&nbsp;<a href="/termdates" style={{color: '#021122', fontWeight: '600'}}> Term Dates </a>&nbsp;for more information about term times.</p>
      </section>

      <section className="pgcontainer">
        <h1>Fees</h1>
        <p>
          The fees for the courses are as follows: 
          
          </p>
      </section>
      <Footer />
    </>
  );
};

export default courses;
