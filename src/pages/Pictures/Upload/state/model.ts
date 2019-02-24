import { initialIPictures, IPictures } from '../../model';

export interface IUploadState {
  hasError: boolean;
  isLoading: boolean;
  pictures: IPictures;
  wasStored: boolean,
  wasUploaded: boolean;
};

export const initialUploadState: IUploadState = {
  hasError: false,
  isLoading: false,
  pictures: initialIPictures,
  wasStored: false,
  wasUploaded: false,
};
