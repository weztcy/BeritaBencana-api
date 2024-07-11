const Article = require('../models/article');

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.fetchAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
