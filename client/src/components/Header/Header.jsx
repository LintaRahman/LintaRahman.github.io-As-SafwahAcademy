import React from "react";
import HeaderVideo from '../../assets/videos/HeaderVideo.mp4'
import Button from "../Button/Button";
import {Fade} from 'react-awesome-reveal';
import "./Header.css";

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px',
//     background: '#333',
//     color: '#fff',
//   },
//   logoContainer: {
//     marginRight: '20px',
//   },
//   logo: {
//     width: '50px', // Adjust the size as needed
//     height: '50px', // Adjust the size as needed
//   },
//   navbar: {
//     display: 'flex',
//     alignItems: 'center',
//     marginRight: 'auto',
//   },
//   videoContainer: {
//     position: 'relative',
//     width: '100%',
//     // overflow: 'hidden',
//   },
//   video: {
//     width: '100%',
//     height: 'auto',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//   },
//   titleContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '2em',
//     marginBottom: '20px',
//     color: 'white',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '1em',
//     backgroundColor: '#4CAF50', // Green color, you can change it
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

const buttonStyle = {
  
}

const Header = ({ text, page, img }) => {
  return (
    <>
      {/* <Navbar homePage={true}/> */}

      {page == "home" ? (
        <section className="box">
          {/* <div className="dark-overlay"> */}
          <video src={HeaderVideo} autoPlay loop muted></video>
          <Fade direction="up" cascade>
          <h1>Enrol your child at<br/> As-Safwah Academy</h1>
          <a href='\register' target='_blank'>
            <button className="whitebutton">Apply Now!</button>
          {/* <Button
            color="transparent"
            borderColor="white"
            text="Register Now"
            fill={false}
          /> */}
          </a>
          </Fade>
          {/* </div> */}
        </section>
      ) : page == "policy" ? 
      (
        <section className="smallheader">
          <img src={img} alt="image of ${text} header" />
          <h1>{text}</h1>
        </section>
      ) :
      (
        <section className="mediumheader">
          <img src={img} alt="image of ${text} header" />
          <h1>{text}</h1>
        </section>
      )}
    </>
  );
};

export default Header;
