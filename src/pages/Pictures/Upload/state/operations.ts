import actions from "./actions";

const reset = () => actions.reset();

const upload = (fileName: string, storageParams: any, apiParams: any) => (
  actions.upload.started({ fileName, storageParams, apiParams })
);

export default {
  reset,
  upload,
};
