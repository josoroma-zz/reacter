import actions from "./actions";

const list = (params: any) =>  actions.list.started({ params });

export default {
  list,
};
