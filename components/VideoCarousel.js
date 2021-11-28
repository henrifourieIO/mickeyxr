import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function VideoCarousel(data) {
  return (
    <>
      {data ? (
        <Carousel responsive={carouselConfig}>
          {data.data.map((item, index) => (
            <div key={index} style={{ padding: "0 1em" }}>
              <iframe
                style={{ width: "100%", height: "184px" }}
                src={`https://youtube.com/embed/${YouTubeGetID(item.url)}`}
                frameborder="0"
                ng-show="showvideo"
              />
            </div>
          ))}
        </Carousel>
      ) : null}
    </>
  );
}
