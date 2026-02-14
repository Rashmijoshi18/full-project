import { useEffect, useState } from "react";
import axios from "axios";

function Saved() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>💾 Saved Articles</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {articles.map((a, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            {a.urlToImage && (
              <img
                src={a.urlToImage}
                alt="news"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            )}
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <a href={a.url} target="_blank">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saved;
