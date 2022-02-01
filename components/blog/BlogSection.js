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
              <BlogCard title={"Project: The Future Of Media Consumption UX"} snipet={"Exploring the future of media consumption with the use of XR (extended reality)"} image={"/image/project-1.png"} slug={"project-1"} />
            </Fade>
          </div>
          <div style={{ padding: "3px 8px" }}>
            <Fade delay={300}>
              <BlogCard title={"Project: Dexter's Shrink-Ray Experience"} snipet={"An immersive, shrunken-down experience illustrating how VR can warp perceptions and entertain beyond belief."} image={"/image/project-2.png"} slug={"project-2"} />
            </Fade>
          </div>
          <div style={{ padding: "3px 8px" }}>
            <Fade delay={600}>
              <BlogCard title={"Project: Experiential Technology for immersive brands"} snipet={"Exploring the use of augmented reality, immersive landing pages, avatars and NFTs for luxury brands to drive e-commerce sales today."} image={"/image/Insights-for-blog-thumbnail.png"} slug={"experiential-tech-for-luxury-brands"} />
            </Fade>
          </div>
          <div style={{ padding: "3px 8px" }}>
            <Fade delay={600}>
              <BlogCard title={"Project: Vespa V-Commerce (UX Concept)"} snipet={"A virtual reality e-commerce (v-commerce) UX concept for Vespa. A truly immersive scooter shopping experience."} image={"/image/vespa.png"} slug={"project-3"} />
            </Fade>
          </div>
        </Carousel>
      ) : null}
    </>
  );
}

export default BlogSection;
