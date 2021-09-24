const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Category.hasMany(Article); // Uma Category tem muitos Articles, relacionamento 1 para muitos
Article.belongsTo(Category); // Um Article pertence a uma Category, relacionamento 1 para 1 

module.exports = Article;