import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgImage from "../../assets/images/HeaderBg.jpg";
import { Link } from "react-router-dom";

const Policy = ({ policy }) => {
  return (
    <>
      <Navbar />
      <Header text={policy.title} img={bgImage} page="policy"/>
      {/* <Link to={`/policies/${policy.id}`}>{policy.title}</Link> */}
      <section className="policyContainer">
        {/* <h1>{policy.title}</h1> */}
        {policy.content}
      </section>

      <Footer />
    </>
  );
};

export default Policy;
