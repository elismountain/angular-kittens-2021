export interface ISearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: ISnippet;
    statistics: IStatistics;
}

interface ISnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    tags: [];
    categoryId: string;
    liveBroadcastContent: string;
    localized: ILocalized;
    defaultAudioLanguage: string;
}

interface IStatistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string; 
}

interface IThumbnails {
    default: IThumbnailItem;
    medium: IThumbnailItem;
    high: IThumbnailItem;
    standard: IThumbnailItem;
    maxres: IThumbnailItem;
}

interface IThumbnailItem {
    url: string;
    width: number;
    height: number;
}

interface ILocalized {
    title: string;
    description: string;
}