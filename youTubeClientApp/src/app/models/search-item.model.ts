export interface IItems {
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
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IThumbnails {
  default: IThumbnailsItems;
  medium: IThumbnailsItems;
  high: IThumbnailsItems;
  standard: IThumbnailsItems;
  maxres: IThumbnailsItems;
}

interface IThumbnailsItems {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
