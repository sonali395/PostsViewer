import { createReducer, on } from '@ngrx/store';
import { loadPostsFailure, loadPostsSuccess, setCurrentSelected } from '../actions/post.action';
import { PostState } from '../models/model';

export const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  currentSelected: 0
};

export const postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { Posts: posts }) => ({
    ...state,
    posts,
    loading: false,
    error: null
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(setCurrentSelected, (state, { id }) => ({
    ...state,
    currentSelected: id
  }))
);