// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPicture = `mutation CreatePicture($input: CreatePictureInput!) {
  createPicture(input: $input) {
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
export const updatePicture = `mutation UpdatePicture($input: UpdatePictureInput!) {
  updatePicture(input: $input) {
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
export const deletePicture = `mutation DeletePicture($input: DeletePictureInput!) {
  deletePicture(input: $input) {
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
