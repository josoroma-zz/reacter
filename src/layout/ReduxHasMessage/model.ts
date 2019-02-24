export interface IReduxHasMessage {
  message: string;
  variant: Variant;
  reset(): void;
}

export interface IState {
  open: boolean;
}

export enum Variant {
  error = 'error',
  success = 'success',
};
