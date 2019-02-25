import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type youMusicStateType = {};

export type Action = {
  +type: string
};

export type GetState = () => youMusicStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
