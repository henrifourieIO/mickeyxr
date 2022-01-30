import React, { useState, useEffect } from "react";
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

function BlogSection(data) {
  return (
    <>
      {data ? (
        <Carousel responsive={carouselConfig} style={{ padding: "1em" }}>
          <div style={{ padding: "3px 8px" }}>
            <BlogCard
              title={"Understanding VR, AR & MR For Companies"}
              snipet={
                "Here's a little talk about the fundamentals of immersive technology that I gave to the Canadian division of a certain consulting firm. Enjoy!"
              }
              image={"/image/img-01.png"}
              slug={"understanding-vr-ar-mr-for-companies"}
            />
          </div>
          <div style={{ padding: "3px 8px" }}>
            <BlogCard
              title={"Marketing In VR Games: What Brands Need To Know"}
              snipet={"The AIXR (Academy of International Extended Reality) panel on Marketing In VR Games."}
              image={"/image/img-02.png"}
              slug={"marketing-in-vr-games-what-brands-need-to-know"}
            />
          </div>
          <div style={{ padding: "3px 8px" }}>
            <BlogCard title={"How African Companies Can Gear Up For The Metaverse"} snipet={""} image={"/image/img-03.png"} slug={"how-african-companies-can-gear-up-for-the-metaverse"} />
          </div>
          <div style={{ padding: "3px 8px" }}>
            <BlogCard title={"Project: ShapesXR"} snipet={"The Future of Media Consumption will have some stark similarities to the way we consume media today."} image={"/image/project-1.png"} slug={"project-1"} />
          </div>
          <div style={{ padding: "3px 8px" }}>
            <BlogCard title={"Project: DexterVR"} snipet={"Get Ready For A Honey I  Shrunk  The  Kids-Type  VR  Experience."} image={"/image/project-2.png"} slug={"project-2"} />
          </div>
          <div style={{ padding: "3px 8px" }}>
            <BlogCard title={"EXPERIENTIAL TECHNOLOGY FOR LUXURY BRANDS"} snipet={"Persuading a customer to buy a branded, high-ticket item in-store is difficult enough, let alone trying to do so online."} image={"/image/Insights-for-blog-thumbnail.png"} slug={"experiential-tech-for-luxury-brands"} />
          </div>
        </Carousel>
      ) : null}
    </>
  );
}

export default BlogSection;
