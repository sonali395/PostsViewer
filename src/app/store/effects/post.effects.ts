import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadPosts, loadPostsFailure, loadPostsSuccess } from '../actions/post.action';
import { PostService } from '../../posts/post.service';

@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private Postservice: PostService
  ) { }

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadPosts.type),
    mergeMap(() => this.Postservice.getPosts()
      .pipe(
        map(posts => loadPostsSuccess({ Posts: posts })),
        catchError(error => of(loadPostsFailure({ error })))
      ))
  )
  );
}