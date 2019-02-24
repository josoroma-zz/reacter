import { IPictures } from '../model';

export interface IPicturesState {
  pictures: IPictures[];
  hasError: boolean;
  isLoading: boolean;
};

export const initialPicturesState: IPicturesState = {
  hasError: false,
  isLoading: false,
  pictures: [],
};
