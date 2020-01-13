import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mb-post-preview-meta',
  templateUrl: './post-preview-meta.component.html',
  styleUrls: ['./post-preview-meta.component.less']
})
export class PostPreviewMetaComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}
