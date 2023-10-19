import { IItem } from '../youtube-module/models/search-item.model';

export interface IAppState {
  customCardsState: ICustomCardState;
  youTubeResponseState: IYouTubeResponseState;
}

export interface ICustomCardState {
  customCards: ICustomCard[];
}

export interface IYouTubeResponseState {
  youTubeResponse: IItem[];
}

export const initialCustomCardState: ICustomCardState = {
  customCards: [],
};
export const initialYouTubeResponseState: IYouTubeResponseState = {
  youTubeResponse: [],
};

export interface ICustomCard {
  title: string;
  description: string;
  imgUrl: string;
  videoLink: string;
  date: Date;
}
