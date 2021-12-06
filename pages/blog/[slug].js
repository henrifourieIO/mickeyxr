const { API_URL } = process.env;
export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`${API_URL}/blogs/${slug}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function blog(props) {
  const post = props.data;

  return (
    <div style={{ width: "80%", maxWidth: "680px", margin: "auto" }}>
      <div>
        <h1 style={{ marginBottom: "0" }}>{post.title}</h1>
        <p style={{ fontSize: "12px", opacity: "0.75" }}>
          Published: {post.published_at}
        </p>
        <img
          src={API_URL + post.image.url}
          style={{ width: "100%", marginBottom: "2em" }}
        />
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "1em",
        }}
      >
        <p>{post.body}</p>
      </div>
    </div>
  );
}
