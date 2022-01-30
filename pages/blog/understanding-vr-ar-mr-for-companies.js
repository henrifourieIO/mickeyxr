import YouTubeVideo from "../../components/tools/getYouTubeId";

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

function calculateVideoHeight() {
  let value = (videoWidth / 16) * 9
  return value
}

const videoWidth = 680;

const videoHeight = calculateVideoHeight()

export default function blog(props) {
  const post = props.data;

  return (
    <div style={{ width: "80%", maxWidth: "680px", margin: "2em auto" }}>
      <div>
        <h1 style={{ marginBottom: "8px" }}>Understanding VR, AR & MR For Companies</h1>
        <iframe
            width={"100%"}
            height={videoHeight}
            src={`https://youtube.com/embed/${YouTubeGetID("https://www.youtube.com/watch?v=ougpSaKaaHo")}`}
            frameborder="0"
            ng-show="showvideo"
            allowfullscreen
            style={{marginBottom: '2em'}}
      />
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "1em",
        }}
      >
        <p>Here's a little talk about the fundamentals of immersive technology that I gave to the Canadian division of a certain consulting firm. Enjoy!</p>
      </div>
    </div>
  );
}