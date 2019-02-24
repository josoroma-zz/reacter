import { INews } from '../model';

export interface INewsState {
  news: INews[];
  hasError: boolean;
  isLoading: boolean;
}

export const initialNewsState: INewsState = {
  hasError: false,
  isLoading: false,
  news: [],
};
