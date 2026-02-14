import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("in"); // default country
  const [loading, setLoading] = useState(false);

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

  const fetchNews = async (selectedCountry) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/news?country=${selectedCountry}`
      );
      setArticles(res.data.articles || res.data.articles || []); // depending on API structure
    } catch (err) {
      console.error(err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(country);
  }, [country]);

  const saveArticle = (article) => {
    axios
      .post("http://localhost:5000/api/articles", article)
      .then(() => alert("Article saved!"))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top News</h1>

      {/* Country Selector */}
      <div style={{ marginBottom: "20px" }}>
        <label>Select Country: </label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {articles.map((a, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              {a.image && ( // GNews uses `image` instead of `urlToImage`
                <img
                  src={a.image}
                  alt="news"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              )}
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <a href={a.url} target="_blank" rel="noreferrer">
                Read More
              </a>
              <br />
              <button onClick={() => saveArticle(a)}>Save</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
