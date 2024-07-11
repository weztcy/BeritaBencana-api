const db = require('../config/database');

class Article {
  static async fetchAll() {
    const [rows, fields] = await db.execute('SELECT * FROM articles');
    return rows;
  }
}

module.exports = Article;
