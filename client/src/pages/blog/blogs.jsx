import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/HeaderBg.jpg";
import blogList from "../../assets/docs/Blogs";
import blogImage from "../../assets/images/Quran.png"
import "./blog.css";
// import './policies.css';
// const policiesList = [
//   { id: "enrol", title: "Enrolment", content: "Lorem Ipsum" },
//   { id: "uniform", title: "Uniform", content: "Lorem Ipsum" },
//   { id: "behaviour", title: "Behaviour", content: "Lorem Ipsum" },
// ];

const blogs = () => {
  return (
    <>
      <Navbar />
      <Header text="Blog" img={bgImage} />
      {/* <div className="blog-container"> */}
        <div className="pgcontainer content-section">
        {blogList.map((blog, i) => {
          return (

            <div className="card">
                <a href={`/blog/${blog.id}`}>
                <img src={blog.image} alt="" />
                <h2>{blog.title}</h2>
                <p className="subp">{blog.time}<span style={{float: "right", textAlign: "right"}}>{blog.date}</span></p>
                <p>{blog.summary}</p>
                </a>
            </div>
        );
          })}
        </div>
      {/* </div> */}
      {/* <section className="pgcontainer">
        <div className="centered">
        <section className="cards">
        {blogList.map((blog, i) => {
          return (
            <article className="card">
            <Link to={`/blog/${blog.id}`}>
                <figure className="thumbnail">
                    <img src={blogImage}/>
                </figure>
                <div className="card-content">
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
                </Link>
            </article>
            
          );
        })}
        </section> 
        </div>
    </section>*/}
      <Footer />
    </>
  );
};

export default blogs;
