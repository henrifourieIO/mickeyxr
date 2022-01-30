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
        <h1 style={{ marginBottom: "8px" }}>Marketing In VR Games: What Brands Need To Know</h1>
        <iframe
            width={"100%"}
            height={videoHeight}
            src={`https://youtube.com/embed/${YouTubeGetID("https://www.youtube.com/watch?v=_Ax2bVAW3DY")}`}
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
        <p>The AIXR (Academy of International Extended Reality) panel on Marketing In VR Games.</p>
      </div>
    </div>
  );
}