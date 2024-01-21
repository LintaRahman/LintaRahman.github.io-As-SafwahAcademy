import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import bgImage from '../../assets/images/HeaderBg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './contact.css';


const IconStyle = { fontSize: '4rem', margin: '0 auto', color: '#021122' }
const contact = () => {
  return (
    <>
    <Navbar/>
    <Header text='Get in Touch' img={bgImage} page="policy" />
    <section className='grid3col'>
    <div className='card'><a href='tel:07401353144'><FontAwesomeIcon icon={faPhone} style={IconStyle}/><h2>Phone</h2><p>Call us on 07401353144</p></a></div>
    <div className='card'><a href='mailto:info@safwaacademy.co.uk'><FontAwesomeIcon icon={faEnvelope} style={IconStyle}/><h2>Email</h2><p>info@assafwaacademy.co.uk</p></a></div>
    <div className='card'><a href='#'><FontAwesomeIcon icon={faWhatsapp} style={IconStyle}/><h2>Whatsapp</h2><p>Message us on Whatsapp.</p></a></div>
    
    
      
    </section>
    <Footer />
    </>
  )
}

export default contact