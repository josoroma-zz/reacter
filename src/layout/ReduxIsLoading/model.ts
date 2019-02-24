export default interface IReduxIsLoading {
  isLoading: boolean;
};

export interface IReduxIsLoadingOn {
  reduxStateIsLoadingOn(): void;
};

export interface IReduxIsLoadingOff {
  reduxStateIsLoadingOff(): void;
};
