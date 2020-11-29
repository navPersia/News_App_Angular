module.exports = mongoose => {
  const Article = mongoose.model(
    "Article",
    mongoose.Schema(
      {
        Title: String,
        img: String,
        SubTitle: String,
        ShortSummary: String,
        Body: String,
        TagID: String,
        UserID: String,
        ArticleStatusID: String,
        Comments:[
          {
            Name: String,
            Comment: String
          }
        ]
      },
      { timestamps: true }
    )
  );

  return Article;
};