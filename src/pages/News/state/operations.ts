import actions from "./actions";

const fetch = (url: string) => actions.fetch.started({ url });

const justAnoterFetch = (url: string) => actions.justAnotherFetch.started({ url });

export default {
  fetch,
  justAnoterFetch
};
