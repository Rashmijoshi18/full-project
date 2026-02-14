import Article from "../models/Article.js";

export const saveArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.json({ message: "Article saved", article });
  } catch (err) {
    res.status(500).json({ error: "Failed to save article" });
  }
};

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch saved articles" });
  }
};
