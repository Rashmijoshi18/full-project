import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import axios from "axios";
import articleRoutes from "./routes/articleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// --- Home Route ---
app.get("/", (req, res) => {
  res.send(`
    <h1>📰 GNews API Server</h1>
    <p>Use <code>/api/news?country=us</code> to fetch news.</p>
    <p>Optional query params: <code>topic</code> and <code>q</code> (keyword)</p>
    <p>Example: <code>/api/news?country=in&topic=technology&q=bitcoin</code></p>
  `);
});

// --- Saved Articles Routes ---
app.use("/api/articles", articleRoutes);

// --- Fetch News Route ---
app.get("/api/news", async (req, res) => {
  try {
    const { country = "us", topic, q, max = 10 } = req.query;

    // Optional: validate country code
    const allowedCountries = ["us","in","gb","au","ca","fr","de","jp","ru","cn","za"];
    if (!allowedCountries.includes(country.toLowerCase())) {
      return res.status(400).json({ error: "Invalid country code" });
    }

    // Make request to GNews API
    const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        country,
        topic,            // optional: general, world, nation, business, technology, sports, entertainment, science, health
        q,                // optional: keyword search
        max,              // optional: number of articles
        token: process.env.GNEWS_API_KEY,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error("GNews API error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to fetch news",
      details: err.response?.data,
    });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
