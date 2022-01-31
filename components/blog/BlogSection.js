import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "./BlogCard";
import Fade from 'react-reveal';

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

function BlogSection(data) {
  return (
    <>
      {data ? (
        <Carousel responsive={carouselConfig} style={{ padding: "1em" }}>
          <div style={{ padding: "3px 8px" }}>
            <Fade>
              <BlogCard title={"Project: ShapesXR"} snipet={"The Future of Media Consumption will have some stark similarities to the way we consume media today."} image={"/image/project-1.png"} slug={"project-1"} />
            </Fade>
          </div>
          <div style={{ padding: "3px 8px" }}>
            <Fade delay={300}>
              <BlogCard title={"Project: DexterVR"} snipet={"Get Ready For A Honey I  Shrunk  The  Kids-Type  VR  Experience."} image={"/image/project-2.png"} slug={"project-2"} />
            </Fade>
          </div>
          <div style={{ padding: "3px 8px" }}>
            <Fade delay={600}>
              <BlogCard title={"EXPERIENTIAL TECHNOLOGY FOR LUXURY BRANDS"} snipet={"Persuading a customer to buy a branded, high-ticket item in-store is difficult enough, let alone trying to do so online."} image={"/image/Insights-for-blog-thumbnail.png"} slug={"experiential-tech-for-luxury-brands"} />
            </Fade>
          </div>
        </Carousel>
      ) : null}
    </>
  );
}

export default BlogSection;
