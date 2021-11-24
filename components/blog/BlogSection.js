import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "./BlogCard";

const carouselConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



function BlogSection (data) {
  return (
    <>
      {data ? (
        <Carousel responsive={carouselConfig}>
          {data.data.map((blog) => (
            <div style={{padding: '0 1em'}}>
              <BlogCard title={blog.title} snipet={blog.snipet} image={blog.image} slug={blog.id} />
            </div>
              
          ))}
        </Carousel>) 
      : null}
    </>
  );
}

export default BlogSection;

