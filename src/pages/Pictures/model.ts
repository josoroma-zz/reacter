export interface IPictures {
  id: string;
  name: string;
  owner: string;
  visibility: Visibility;
  file: IS3Object;
};

export enum Visibility {
  public = 'public',
  private = 'private',
};

export interface IS3Object {
  bucket: string;
  key: string;
  region: string;
};

export const initialIPictures: IPictures = {
  file: {
    bucket: '',
    key: '',
    region: '',
  },
  id: '',
  name: '',
  owner: '',
  visibility: Visibility.private,
};

export interface IPicturesListResponse {
  listPictures: {
    items: IPictures[];
  }
};
