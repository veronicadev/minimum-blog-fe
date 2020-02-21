import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../../src/app/services/auth.service';

@Component({
  selector: 'mb-post-preview-meta',
  templateUrl: './post-preview-meta.component.html',
  styleUrls: ['./post-preview-meta.component.less']
})
export class PostPreviewMetaComponent implements OnInit {
  editBtn: boolean = false;
  @Input() post;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.post.creator._id === this.authService.getUser().id){
      this.editBtn = true;
    }
  }

}
