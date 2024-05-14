import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PostDetailsComponent } from './post-details/post-details.component';
import { PostService } from './post.service';
import { loadPosts } from '../store/actions/post.action';
import { selectPosts, selected } from '../store/selectors/post.selector';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostDetailsComponent, CommonModule],
  providers: [PostService],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {

  postData$: Observable<any[]> = this.store.select(selectPosts)
  selected$: Observable<number> = this.store.select(selected)

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

}
