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

// function YouTubeGetID(url) {
//   var ID = "";
//   url = url
//     .replace(/(>|<)/gi, "")
//     .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
//   if (url[2] !== undefined) {
//     ID = url[2].split(/[^0-9a-z_\-]/i);
//     ID = ID[0];
//   } else {
//     ID = url;
//   }
//   return ID;
// }

export default function VideoCarousel() {
  return (
    <Carousel responsive={carouselConfig}>
        <div style={{padding: '0 1em'}}>
          <iframe
            style={{ width: "100%", height: "184px" }}
            src={`https://youtube.com/embed/ougpSaKaaHo'}`}
            frameborder="0"
            ng-show="showvideo"
          />
        </div>
        <div style={{padding: '0 1em'}}>
        <iframe
            style={{ width: "100%", height: "184px" }}
            src={`https://youtube.com/embed/_Ax2bVAW3DY'}`}
            frameborder="0"
            ng-show="showvideo"
          />
        </div>
    </Carousel>
  );
}
