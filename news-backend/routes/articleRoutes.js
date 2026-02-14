import express from "express";
import { saveArticle, getArticles } from "../controllers/articleController.js";

const router = express.Router();

router.post("/", saveArticle);   // Save article
router.get("/", getArticles);    // Get saved articles

export default router;
