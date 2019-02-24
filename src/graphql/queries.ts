// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPicture = `query GetPicture($id: ID!) {
  getPicture(id: $id) {
    id
    name
    owner
    visibility
    file {
      bucket
      region
      key
    }
  }
}
`;
export const listPictures = `query ListPictures(
  $filter: ModelPictureFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      owner
      visibility
      file {
        bucket
        region
        key
      }
    }
    nextToken
  }
}
`;
export const searchPictures = `query SearchPictures(
  $filter: SearchablePictureFilterInput
  $sort: SearchablePictureSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPictures(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      owner
      visibility
      file {
        bucket
        region
        key
      }
    }
    nextToken
  }
}
`;
