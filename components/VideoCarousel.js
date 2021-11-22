import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const dummy = [
  {
    title: "title",
    video_url: "https://youtu.be/ougpSaKaaHo",
  },
  {
    title: "title",
    video_url: "https://www.youtube.com/watch?v=6tmTwsi8Vrs",
  },
  {
    title: "title",
    video_url: "https://www.youtube.com/watch?v=sYR9z3hVI8I",
  },
  {
    title: "title",
    video_url: "https://www.youtube.com/watch?v=NKooG8KM-Fc",
  },
  {
    title: "title",
    video_url: "https://www.youtube.com/watch?v=kJJh2Bs4Tsg",
  },
];

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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function YouTubeGetID(url) {
  var ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
}

export default function VideoCarousel() {
  return (
    <Carousel responsive={carouselConfig}>
      {dummy.map((item, index) => (
        <div key={index} style={{padding: '0 1em'}}>
          <iframe
            style={{ width: "100%", height: "184px" }}
            src={`https://youtube.com/embed/${YouTubeGetID(item.video_url)}`}
            frameborder="0"
            ng-show="showvideo"
          />
        </div>
      ))}
    </Carousel>
  );
}
