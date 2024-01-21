import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Register from "./pages/register/register";
// import JotformRegister from "./pages/register/jotform_register";
import Contact from "./pages/contact/contact";
import SignIn from "./pages/signin";
import Policies from "./pages/policies/policies"
import PolicyPage from "./pages/policies/policyPage";
import Courses from "./pages/courses/courses";
import CoursePage from "./pages/courses/coursePage";
import Blogs from "./pages/blog/blogs";
import BlogPage from "./pages/blog/blogPages";
import Termdates from "./pages/termdates/termdates";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register" element={<JotformRegister />} /> */}
        <Route path="/policies" element={<Policies />} />
        <Route path="/policies/:policyId" element={<PolicyPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/termdates" element={<Termdates />} />
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
