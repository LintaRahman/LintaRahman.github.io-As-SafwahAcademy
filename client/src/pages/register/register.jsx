import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bgImage from "../../assets/images/HeaderBg.jpg";
import formData from "../../assets/docs/RegistrationForm.json";
import TextInput from "../../components/TextInput/TextInput";
import JotformEmbed from "react-jotform-embed";
import "./register.css";

const register = () => {
  // const [htmlContent, setHtmlContent] = useState('');

  // useEffect(() => {
  //   const fetchHtmlContent = async () => {
  //     try {
  //       const response = await fetch('./Institute_Registration_Form.html');
  //       const content = await response.text();
  //       setHtmlContent(content);
  //     } catch (error) {
  //       console.error('Error fetching HTML content:', error);
  //     }
  //   };

  //   fetchHtmlContent();
  // }, []);

  // return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;


  // const [submit, setSubmit] = useState(false);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setSubmit(true);
  // }

  // //   // Additional logic for handling form submission
  // //   try {
  // //     await fetch(
  // //       "https://docs.google.com/forms/u/3/d/e/1FAIpQLSc5RjaQT_4i9ytBZ4q4-FzyrO-SduU5Sv8JPRafPQ4MsyXXZQ/formResponse",
  // //       {
  // //         method: "POST",
  // //         headers: {
  // //           "Content-Type": "application/x-www-form-urlencoded",
  // //         },
  // //         body: new URLSearchParams(new FormData(event.target)),
  // //       }
  // //     );
  // //     setSubmit(true);
  // //     // if (response.ok) {
  // //     //   console.log("Form submitted successfully");
  // //     //   setSubmit(true);
  // //     // } else {
  // //     //   console.error("Failed to submit form:", response.status, response.statusText);
  // //     // }
  // //   } catch (error) {
  // //     console.error("Error occurred during form submission:", error);
  // //   }
  // // };

  // useEffect(() => {
  //   // Additional logic or side effects after the state has been updated
  //   console.log("Submit state has changed:", submit);
  // }, [submit]);

  // return (
  //   <>
  //     <Navbar scrollVal={0} />
  //     <Header text="Register" img={bgImage} />
 
  //     <div className="pgcontainer">
  //       {submit ? (
  //         <h1>Thank you for your submission</h1>
  //       ) : (
  //         <form
  //           action="https://docs.google.com/forms/u/3/d/e/1FAIpQLSc5RjaQT_4i9ytBZ4q4-FzyrO-SduU5Sv8JPRafPQ4MsyXXZQ/formResponse"
  //           method="POST"
  //           target="_self"
  //           // onSubmit={handleSubmit}
  //         >
  //           {formData.map((form, i) => {
  //             return (
  //               <TextInput
  //                 type={form.type}
  //                 name={form.name}
  //                 label={form.label}
  //               />
  //             );
  //           })}
  //           <input type="submit" value="Register" className="btn btn-primary" onClick={handleSubmit}/>
  //         </form>
  //       )}
  //     </div>
  //     <Footer />
  //   </>
  // );
};

export default register;

{
  /* <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>

            <div className="col-75">
              <input
                type="text"
                name="entry.953988452"
                placeholder="First Name"
                required
              />
            </div>
          </div>
 //   console.log('at handleSubmit');
  //   event.preventDefault();
  //   console.log('after event preventdefault');
  //   setSubmit(true);
  // };
  // useEffect(() => {
  //   const iframe = document.getElementById("jotformIframe");

  //   const adjustIframeHeight = () => {
  //     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  //   };

  //   iframe.addEventListener("load", adjustIframeHeight);
  //   window.addEventListener("resize", adjustIframeHeight);

  //   return () => {
  //     iframe.removeEventListener("load", adjustIframeHeight);
  //     window.removeEventListener("resize", adjustIframeHeight);
  //   };
  // }, []);

//       {/* <iframe
//   id="jotformIframe"
//   title="Jotform Registration Form"
//   src="https://form.jotform.com/212725309811351"
//   frameBorder="0"
//   style={{ width: "100%", height: '100vh' }}
//   allowFullScreen
//   allow="autoplay; fullscreen"
// ></iframe> */}
      // {/* <JotformEmbed src="https://form.jotform.com/212725309811351" /> */}

//           <div className="row">
//             <div className="col-25">
//               <label htmlFor="lname">Last Name</label>
//             </div>

//             <div className="col-75">
//               <input
//                 type="text"
//                 name="entry.953988452"
//                 placeholder="Last Name"
//                 required
//               />
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-25">
//               <label htmlFor="phone">Phone Number</label>
//             </div>

//             <div className="col-75">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//               />
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-25">
//               <label htmlFor="email">E-mail</label>
//             </div>

//             <div className="col-75">
//               <input
//                 type="email"
//                 name="entry.953988452"
//                 placeholder="E-mail"
//                 required
//               />
//             </div>
//           </div> */
// }
