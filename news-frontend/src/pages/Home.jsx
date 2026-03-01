import { useEffect, useState } from "react";
import API from "../api";

function Home() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("in"); // default country
  const [topic, setTopic] = useState("general"); // default topic/category
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const countries = [
    { code: "in", name: "India" },
    { code: "us", name: "USA" },
    { code: "gb", name: "United Kingdom" },
    { code: "au", name: "Australia" },
    { code: "ca", name: "Canada" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "jp", name: "Japan" },
    { code: "ru", name: "Russia" },
    { code: "cn", name: "China" },
    { code: "za", name: "South Africa" },
  ];

  const topics = [
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

  const fetchNews = async (selectedCountry, selectedTopic) => {
    try {
      setLoading(true);
      const params = { country: selectedCountry, topic: selectedTopic };
      const res = await API.get(`/news`, { params });
      setArticles(res.data.articles || res.data.articles || []); // depending on API structure
    } catch (err) {
      console.error(err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(country, topic);
  }, [country, topic]);

  const saveArticle = (article) => {
    API.post("/articles", article)
      .then(() => {
        setSavedMessage("Article saved!");
        setTimeout(() => setSavedMessage(""), 3000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h1 className="header">Top News</h1>

      {savedMessage && <div className="message-banner">{savedMessage}</div>}
      {loading ? (
        <div className="spinner" />
      ) : (
        <>
          <div className="selectors-row">
            {/* Country Selector */}
            <div className="select-country">
              <label>Select Country: </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Selector */}
            <div className="select-country">
              <label>Select Category: </label>
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                {topics.map((t) => (
                  <option key={t.code} value={t.code}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search input */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="news-grid">
            {articles
              .filter(
                (a) =>
                  a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  (a.description || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()),
              )
              .map((a, i) => (
                <div
                  key={i}
                  className="news-card"
                  onClick={() => window.open(a.url, "_blank")}
                >
                  {a.image && ( // GNews uses `image` instead of `urlToImage`
                    <img src={a.image} alt="news" />
                  )}
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  <p className="category-label">Category: {a.topic || topic}</p>
                  <button
                    className="btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      saveArticle({ ...a, topic });
                    }}
                  >
                    💾 Save
                  </button>
                </div>
              ))}
            {articles.length === 0 && !loading && (
              <p className="empty-state">No articles available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
