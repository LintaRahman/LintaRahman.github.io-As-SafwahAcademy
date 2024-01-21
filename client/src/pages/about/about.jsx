import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/HeaderBg.jpg";
import institute from "../../assets/images/instituteimage.webp";
import logo from "../../assets/images/As-Safwah_logo.png"
const about = () => {
  return (
    <>
      <Navbar />
      <Header text="About Us" img={bgImage} />
      <section className="pgcontainer columns2">
      <div><img src={logo} alt="" /></div>
        <div className="col1">
          <h1>Our Institute</h1>
          <p>
            Safwa Academy was established in November 2021. 
          </p>
        </div>
      </section>

      <section className="pgcontainer">
      {/* <div><img src={institute} alt="" /></div> */}
        <div className="col1">
          <h1>As-Safwah Academy, Pimlico</h1>
          <p><strong>Location:</strong> Pimlico Academy, Lupus St, Pimlico, London SW1V 3AT</p>
          <p><strong>Phone:</strong> 07_______</p>
          <p><strong>E-mail:</strong>info@assafwahacademy.co.uk</p>
          <p><strong>Time:</strong> 09:00AM - 01:00PM</p>
        </div>
      </section>
{/* 
      <section className="pgcontainer">
        <h1>Founder & Director</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore illum suscipit temporibus. Perferendis aliquam id ipsa voluptatibus ipsum ex est. Quam mollitia quia architecto voluptatum vero suscipit quisquam laborum earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio quos iure temporibus odit vitae beatae, eveniet fuga expedita nihil sunt. Dolorem vitae maiores doloribus rerum maxime. Nihil, deleniti similique!</p>
      </section>

      <section className="pgcontainer">
        <h1>Staff</h1>
        <p>At As-Safwah Academy, safeguarding is priority. Therefore, all our staff are DBS checked and have received first aid training.</p>
      </section> */}
      <Footer />
    </>
  );
};

export default about;
