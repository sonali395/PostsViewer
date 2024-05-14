import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { setCurrentSelected } from '../../store/actions/post.action';
import { IPost } from '../post-model';

type KeyArray = (keyof IPost)[];

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnChanges, OnInit {

  @ViewChild('cardContainer')
  cardContainer!: ElementRef;

  @Input()
  set data(data: IPost) {
    if (data) {
      this.innerData = data;
      this.properties = Object.keys(this.innerData) as KeyArray;
    }
  }

  @Input()
  selectedId!: number | null;

  get data() {
    return this.innerData;
  }

  currentIndex = 2;
  selectionNotified = false;
  properties: KeyArray = [];

  private innerData!: IPost;

  constructor(private store: Store) { }

  ngOnInit() {
    if (this.data) {
      this.properties = Object.keys(this.data) as KeyArray;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedId']?.currentValue !== changes['selectedId']?.previousValue) {
      if (changes['selectedId']?.currentValue !== this.innerData?.id) {
        this.currentIndex = 2;
        this.selectionNotified = false;
      }
    }
  }

  togglePostDetail(): void {
    if (this.cardContainer) {
      this.cardContainer.nativeElement.classList.toggle('is-flipped');
    }
    this.currentIndex = (this.currentIndex + 1) % this.properties.length;
    if (!this.selectionNotified) {
      this.store.dispatch(setCurrentSelected({ id: this.innerData?.id }))
      this.selectionNotified = true;
    }
  }

}
