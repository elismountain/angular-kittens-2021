export interface SearchResponse {
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: [
    {
      id: string;
      snippet: {
        publishedAt: Date;
        channelTitle: string;
        title: string;
        description: string;
        localized: {
          title: string;
          description: string;
        };
        thumbnails: {
          standard: {
            url: string;
          };
        };
      };
      statistics: {
        viewCount: number;
        likeCount: number;
        dislikeCount: number;
        commentCount: number;
      };
    },
  ];
}
