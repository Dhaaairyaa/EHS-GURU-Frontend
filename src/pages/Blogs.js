import React from 'react';
import BlogsIntro from '../components/BlogsPage/BlogsIntro';
import Navbar from '../components/Navbar';
import BlogsList from "../components/BlogsPage/BlogsList.js"
const Blogs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BlogsIntro></BlogsIntro>
      <BlogsList></BlogsList>
    </div>
  );
};

export default Blogs;