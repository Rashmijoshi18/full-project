import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  urlToImage: String,
});

export default mongoose.model("Article", ArticleSchema);
