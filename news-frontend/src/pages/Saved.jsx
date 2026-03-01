import { useEffect, useState } from "react";
import API from "../api";

function Saved() {
  const [articles, setArticles] = useState([]);
  const [topicFilter, setTopicFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    { code: "", name: "All" },
    { code: "general", name: "General" },
    { code: "world", name: "World" },
    { code: "nation", name: "Nation" },
    { code: "business", name: "Business" },
    { code: "technology", name: "Technology" },
    { code: "sports", name: "Sports" },
    { code: "entertainment", name: "Entertainment" },
    { code: "science", name: "Science" },
    { code: "health", name: "Health" },
  ];

  useEffect(() => {
    const params = {};
    if (topicFilter) params.topic = topicFilter;

    setLoading(true);
    API.get("/articles", { params })
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [topicFilter]);

  return (
    <div className="container">
      <h1>💾 Saved Articles</h1>
      <div className="selectors-row">
        <div className="select-country">
          <label>Filter by Category: </label>
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
          >
            {topics.map((t) => (
              <option key={t.code} value={t.code}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search saved..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {loading ? (
        <div className="spinner" />
      ) : (
        <div className="news-grid">
          {(() => {
            const filtered = articles.filter(
              (a) =>
                a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (a.description || "")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
            );
            if (filtered.length === 0) {
              return <p className="empty-state">No saved articles.</p>;
            }
            return filtered.map((a, i) => (
              <div
                key={i}
                className="news-card"
                onClick={() => window.open(a.url, "_blank")}
              >
                {a.urlToImage && <img src={a.urlToImage} alt="news" />}
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                {a.topic && (
                  <p className="category-label">Category: {a.topic}</p>
                )}
              </div>
            ));
          })()}
        </div>
      )}
    </div>
  );
}

export default Saved;
