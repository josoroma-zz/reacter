import { IPictures, IS3Object, Visibility } from '../model';

export default interface IUpload extends IPictures {
  file: IS3ObjectUpload;
};

export interface IS3ObjectUpload extends IS3Object {
  mimeType: string;
  localUri: any;
};

export interface IUploadResponse {
  createPicture: IPictures;
};

export const initialIUpload: IUpload = {
  file: {
    bucket: '',
    key: '',
    localUri: {},
    mimeType: '',
    region: '',
  },
  id: '',
  name: '',
  owner: '',
  visibility: Visibility.private,
};

