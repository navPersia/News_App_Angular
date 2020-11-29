module.exports = app => {
  const articlestatus = require("../controllers/articlestatus.controller.js");

  var router = require("express").Router();

  router.post("/", articlestatus.create);

  // Retrieve all articlestatus
  router.get("/", articlestatus.findAll);

  // Retrieve a single articlestatus with id
  router.get("/:id", articlestatus.findOne);

  app.use('/api/ArticleStatus', router);
};