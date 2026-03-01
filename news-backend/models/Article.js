import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  topic: String, // category/topic for classification
});

export default mongoose.model("Article", ArticleSchema);
