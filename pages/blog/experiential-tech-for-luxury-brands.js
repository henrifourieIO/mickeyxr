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
  let value = (videoWidth / 16) * 9;
  return value;
}

const videoWidth = 680;

const videoHeight = calculateVideoHeight();

export default function blog(props) {
  const post = props.data;

  return (
    <div style={{ width: "80%", maxWidth: "680px", margin: "2em auto" }}>
      <div>
        <h1 style={{ marginBottom: "8px" }}>EXPERIENTIAL TECHNOLOGY FOR LUXURY BRANDS</h1>
        <img src={"/image/Insights-for-blog-thumbnail.png"} style={{ width: "100%" }} />
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "1em",
        }}
      >
        <p>
          Persuading a customer to buy a branded, high-ticket item in-store is
          difficult enough, let alone trying to do so online. A brick-and-mortar
          store can create the ambiance with a magnificent store design,
          optimized store layout, alluring scent, well-trained salespeople, and
          perhaps even a little espresso and biscotti?
        </p>
        <a
          href={
            "/Experiential-Tech-For-Luxury-Brands-For-Blog.pdf"
          }
          target={"_blank"}
        >
          <button className="btn btn-outline-light">Read More</button>
        </a>
      </div>
    </div>
  );
}
