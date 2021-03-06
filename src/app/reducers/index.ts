import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, reducer } from '../login.reducer';

export interface State {
  authState: AuthState
}

export const reducers: ActionReducerMap<State> = {
  authState: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
