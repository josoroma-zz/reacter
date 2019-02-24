import { Action } from 'redux';

export default interface IPayloadAction extends Action {
  type: string;
  payload: any;
  error?: boolean;
  meta?: any;
};
