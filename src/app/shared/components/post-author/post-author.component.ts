import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-post-author',
  templateUrl: './post-author.component.html',
  styleUrls: ['./post-author.component.less']
})
export class PostAuthorComponent implements OnInit {
  @Input() author;
  constructor() { }

  ngOnInit() {
  }

}
