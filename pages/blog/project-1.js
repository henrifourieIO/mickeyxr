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
        <h1 style={{ marginBottom: "8px" }}>Project: The Future Of Media Consumption UX</h1>
        <img src={"/image/project-1.png"} style={{width: '100%'}} />
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "1em",
        }}
      >
        <p>Exploring the future of media consumption with the use of XR (extended reality)</p>
        <a href={"https://shapes.app/#/spaces/cd65209d-d620-4ed3-af86-ae22fed45c30/4a7677"} target={"_blank"} >
                    <button className="btn btn-outline-light">Check it Out</button>
                </a>
      </div>
    </div>
  );
}