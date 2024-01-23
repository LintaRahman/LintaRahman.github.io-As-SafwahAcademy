import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";
import Quran from "../../assets/images/Quran.png";
import blogList from "../../assets/docs/Blogs";
import testimonials from "../../assets/docs/Testimonials.json";
import QuranImg from "../../assets/images/Quran.png";
import QuranImg2 from "../../assets/images/Quran2.png";
import Arabic from "../../assets/images/Arabic.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "../blog/blog.css";
const home = () => {
  return (
    <>
      <Navbar />
      <Header page="home" />
      <section className="columns2">
        <div>
          <Fade direction="left" casecade>
            <img src={Quran} />
          </Fade>
        </div>
        <div className="col1">
          <Fade direction="up" casecade>
            <h1>Welcome to As-Safwa Academy!</h1>
            <p>
              As-Safwa Academy, established in November 2021, is a dedicated
              Madrasah committed to nurturing the intellectual and spiritual
              growth of students aged 4-16. Beyond its focus on foundational
              education, the academy extends its services to the broader
              community by offering courses for adults. Rooted in Islamic
              principles, As-Safwa Academy endeavors to impart comprehensive
              knowledge of the religion, fostering a strong connection to
              spirituality and creating a sense of community within the local
              Islamic population.<br/>
              <a href="\about">
              <button className="bluebutton">Learn More</button>
            </a>
            </p>
            
            
          </Fade>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pgcontainer" style={{background: '#1c4943'}}>
        <Fade direction="up" casecade>
          {/* <h1 style={{color: 'white'}}>Testimonials</h1> */}
        </Fade>
        <Fade direction="right" casecade>

          <Testimonials testimonialData={testimonials} />
        </Fade>
      </section>

      {/* Offer */}
      <Link to='/courses'>
      <section className="pgcontainer">
        <Fade direction="up" casecade>
          <h1>What do we offer</h1>
        </Fade>
        <div className=" content-section">
          {/* <Fade direction="up" casecade> */}
            <div className="overlayCard">
              <img src={QuranImg2} alt="" />
              <h2>Qur'an</h2>
              <div className="overlay">
                <div className="text">Qur'an</div>
              </div>
            </div>
            <div className="overlayCard">
              <img src={QuranImg} alt="" />
              <h2>Islamic Studies</h2>
              <div className="overlay">
                <div className="text">Islamic Studies</div>
              </div>
            </div>
            <div className="overlayCard">
              <img src={Arabic} alt="" />
              <h2>Arabic Language</h2>
              <div className="overlay">
                <div className="text">Arabic Language</div>
              </div>
            </div>
          {/* </Fade> */}
        </div>
      </section>
      </Link>

      

      {/* Blog
      <section className="pgcontainer">
      <Fade direction="up" casecade>
        <h1>News</h1>
        </Fade>
        <div className="content-section">
          {blogList.map((blog, i) => {
            return (
              <div className="card">
                <a href={`/blog/${blog.id}`}>
                <img src={blog.image} alt="" />
                <h2>{blog.title}</h2>
                <p className="subp">{blog.time}</p>
                <p>{blog.summary}</p>
                </a>
            </div>
            );
          })}
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default home;
