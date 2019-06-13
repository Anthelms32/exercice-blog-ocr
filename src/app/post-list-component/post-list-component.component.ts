import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.sass']
})
export class PostListComponentComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at:Date;
  constructor() { }

  ngOnInit() {
  }
  getPostLoveIts(){
    return this.postLoveIts;
  }
  onLoveIts(){
    this.postLoveIts++;
  }
  onDontLoveIts(){
    this.postLoveIts--;
  }
}
