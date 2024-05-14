import { ActionReducerMap } from "@ngrx/store";
import { PostState } from "../models/model";
import { postReducer } from "./post.reducer";

export interface AppState {
  posts: PostState;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: postReducer,
};
