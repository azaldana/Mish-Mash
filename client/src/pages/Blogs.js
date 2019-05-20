import React, {Component} from "react";
import NavBarBlogs from "../components/Blogs/NavBar";
import BlogLayout from "../components/Blogs/BlogLayout";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Blogs/Footer";

function Blogs() {
    return (
      <Wrapper>
        <NavBarBlogs/>
        <BlogLayout/>
        <Footer/>
        </Wrapper>
    );
  }
export default Blogs;