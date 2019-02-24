/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePictureInput = {
  id?: string | null,
  name: string,
  owner?: string | null,
  visibility?: Visibility | null,
  file?: S3ObjectInput | null,
};

export enum Visibility {
  public = "public",
  private = "private",
}


export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type UpdatePictureInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  visibility?: Visibility | null,
  file?: S3ObjectInput | null,
};

export type DeletePictureInput = {
  id?: string | null,
};

export type ModelPictureFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  visibility?: ModelVisibilityFilterInput | null,
  and?: Array< ModelPictureFilterInput | null > | null,
  or?: Array< ModelPictureFilterInput | null > | null,
  not?: ModelPictureFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelVisibilityFilterInput = {
  eq?: Visibility | null,
  ne?: Visibility | null,
};

export type SearchablePictureFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  and?: Array< SearchablePictureFilterInput | null > | null,
  or?: Array< SearchablePictureFilterInput | null > | null,
  not?: SearchablePictureFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchablePictureSortInput = {
  field?: SearchablePictureSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePictureSortableFields {
  id = "id",
  name = "name",
  owner = "owner",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreatePictureMutationVariables = {
  input: CreatePictureInput,
};

export type CreatePictureMutation = {
  createPicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};

export type UpdatePictureMutationVariables = {
  input: UpdatePictureInput,
};

export type UpdatePictureMutation = {
  updatePicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};

export type DeletePictureMutationVariables = {
  input: DeletePictureInput,
};

export type DeletePictureMutation = {
  deletePicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};

export type GetPictureQueryVariables = {
  id: string,
};

export type GetPictureQuery = {
  getPicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};

export type ListPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicturesQuery = {
  listPictures:  {
    __typename: "ModelPictureConnection",
    items:  Array< {
      __typename: "Picture",
      id: string,
      name: string,
      owner: string | null,
      visibility: Visibility | null,
      file:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchPicturesQueryVariables = {
  filter?: SearchablePictureFilterInput | null,
  sort?: SearchablePictureSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchPicturesQuery = {
  searchPictures:  {
    __typename: "SearchablePictureConnection",
    items:  Array< {
      __typename: "Picture",
      id: string,
      name: string,
      owner: string | null,
      visibility: Visibility | null,
      file:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePictureSubscription = {
  onCreatePicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};

export type OnUpdatePictureSubscription = {
  onUpdatePicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};

export type OnDeletePictureSubscription = {
  onDeletePicture:  {
    __typename: "Picture",
    id: string,
    name: string,
    owner: string | null,
    visibility: Visibility | null,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
  } | null,
};
