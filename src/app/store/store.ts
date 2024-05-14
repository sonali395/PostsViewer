import { Action, ActionReducer } from "@ngrx/store";
import { PostState } from "./models/model";
import { postReducer } from "./reducers/post.reducer";
import { PostEffects } from "./effects";

export interface AppState {
  posts: PostState
}

export interface AppStore {
  posts: ActionReducer<PostState, Action>;
}

export const appStore: AppStore = {
  posts: postReducer
}

export const appEffects = [PostEffects];