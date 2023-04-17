import { customCardsReducer } from './reducers/customCards.reducer';
import { youTubeResponseReducer } from './reducers/youTubeResponse.reducers';

export const appState = {
  customCardsState: customCardsReducer,
  youTubeResponseState: youTubeResponseReducer,
};
