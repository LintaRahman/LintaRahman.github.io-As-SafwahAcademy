import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Blog = ({ blog }) => {
  return (
    <>
      <Navbar scrollVal={0}/>
      <section className="pgcontainer"></section>
      <section className="pgcontainer"><h1>{blog.title}</h1></section>
      <Header img={blog.image} />
      <div className="pgcontainer">
      
        {/* <h1>{blog.title}</h1> */}
        {/* <div className="blogimg">
          <img src={blog.image} alt="" />
        </div> */}
        <div>{blog.content}</div>
      </div>
      {/* 
      <section className="blogContainer">
        {blog.content}
      </section> */}

      <Footer />
    </>
  );
};

export default Blog;
