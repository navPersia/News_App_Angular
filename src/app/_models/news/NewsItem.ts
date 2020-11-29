export class NewsItem {

	constructor(
		public _id: string,
		public Title: string,
		public Comments: [
			{
				Name: string,
				Comment: string
			}
		],
		public img: string,
		public SubTitle: string,
		public ShortSummary: string,
		public Body: string,
		public TagID: string,
		public UserID: string,
		public ArticleStatusID: string,
		public createdAt: string,
		public updatedAt: string,
		public __v: number
	)

	{}
  }