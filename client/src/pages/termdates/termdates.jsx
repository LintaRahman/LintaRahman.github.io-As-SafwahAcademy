import React from 'react'
import TermDates from '../../assets/docs/TermDates.json'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import bgImage from "../../assets/images/HeaderBg.jpg";
import './termdates.css';
import Table from '../../components/Table/Table';

const termdates = () => {
  return (
    <>
    <Navbar />
    <Header text='Term Dates' img={bgImage} page="policy"/>
    <section className="pgcontainer">
    <Table Data={TermDates} />
{/* //   "additionalInfo": "Day trip for students – exact date during half term to be confirmed"
//   "additionalInfo": "Sunday, 16th June 2024 – Maktab closed as this will potentially be Eid ul-Adha" */}
      </section>
      <Footer />
</>
  )
}

export default termdates