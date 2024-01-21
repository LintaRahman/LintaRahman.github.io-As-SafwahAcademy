import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import TermDates from "../../assets/docs/TermDates2023-24.pdf"
import './Footer.css';
import logo from '../../assets/images/white-logo.png'

const Footer = () => {
  return (<>
    {/* <section style="height: 500px">
         <div className='wave wave1'></div>
         <div className='wave wave2'></div>
         <div className='wave wave3'></div>
         <div className='wave wave4'></div>
     </section> */}
    <footer className='footer'>
     
        <div className="container">
            <div className="row">
                <div className='footer-col'> 
                <img src={logo} alt="" />
                {/* <div className="logo">Safwa Academy</div>  */}
                {/* <p>Inspiring the next generation</p> */}
                </div>
                <div className="footer-col">
                    <h4>Get in Touch</h4>
                    <ul>
                         <li><a href="Tel:07401353144">Phone</a></li>
                        <li><a href="mailto:info@safwaacademy.co.uk">Email</a></li> 
                        <li><a href="https://api.whatsapp.com/send?phone=+447401353144" target='_blank'>WhatsApp</a></li>
                        {/* <li><a href="#"><FontAwesomeIcon icon={faPhone} />Phone</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelope} />Email</a></li> 
                        <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</a></li>                         */}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Institute</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/courses">Our Courses</a></li>
                        <li><a href='/termdates' target='_blank'>Term Dates</a></li>
                        <li><a href="/blog">News</a></li>
                        
                    </ul>
                </div>

                <div className="footer-col">
                    <h4><a href="/policies">Policies</a></h4>
                    <ul>
                        <li><a href="/policies/enrolment">Enrolment Policy</a></li>
                        <li><a href="/policies/uniform">Uniform Policy</a></li>
                        <li><a href="/policies/behaviour">Behaviour Policy</a></li>
                        <li><a href="/policies/privacy">Privacy Policy</a></li>
                        <li><a href="/policies/tncs">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <ul className='social-links'>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
<div className='container'>
    <div className='copyright'>
        Copyright ©2024 As-Safwah Academy | All Rights Reserved
    </div>
</div>
    </footer>
    </>
   
  )
}

export default Footer

// import styles from "./FooterStyle";
// // import { logo } from "../assets";
// import { footerLinks, socialMedia } from "../../constants";

// const Footer = () => (
//   <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col footer`} style="background: black">
//     <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//       <div className="flex-[1] flex flex-col justify-start mr-10">
//         <h1>Safwa Academy</h1>
//         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
//           Inspiring the next generation.
//         </p>
//       </div>

//       <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//         {footerLinks.map((footerlink) => (
//           <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
//             <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
//               {footerlink.title}
//             </h4>
//             <ul className="list-none mt-4">
//               {footerlink.links.map((link, index) => (
//                 <li
//                   key={link.name}
//                   className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
//                     index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
//                   }`}
//                 >
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//       <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
//         Copyright Ⓒ 2023 Safwa Academy. All Rights Reserved.
//       </p>

//       <div className="flex flex-row md:mt-0 mt-6">
//         {socialMedia.map((social, index) => (
//           <img
//             key={social.id}
//             src={social.icon}
//             alt={social.id}
//             className={`w-[21px] h-[21px] object-contain cursor-pointer ${
//               index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
//             }`}
//             onClick={() => window.open(social.link)}
//           />
//         ))}
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
