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
          <video 
          type="video/mp4" 
          src={'https://demio-accounts-s3-cdn.demio.com/0e51663f-496d-473d-94d6-68389bac72e7/recordings/1934795/recording-1934795.mp4'} 
          controls 
          style={{ width: "100%", height: "184px" }} 
          />
        </div>
    </Carousel>
  );
}
