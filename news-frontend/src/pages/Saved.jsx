import { useEffect, useState } from "react";
import API from "../api";

function Saved() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.get("/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>💾 Saved Articles</h1>
      <div className="news-grid">
        {articles.map((a, i) => (
          <div key={i} className="news-card">
            {a.urlToImage && <img src={a.urlToImage} alt="news" />}
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
