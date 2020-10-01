import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../../../src/app/models/post';
import { AuthService } from '../../../../src/app/services/auth.service';
import { User } from '../../../../src/app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../../src/app/services/post.service';
import { EDITOR_CONFIG } from 'src/app/shared/editor-config';

@Component({
  selector: 'mb-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.less']
})
export class EditPostComponent implements OnInit {
  editPostForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  user: User;
  editMode: boolean = false;
  pageTitle: string = "Add post";
  postId: string = '';
  post: Post = {
    title: '',
    content: '',
    category: ''
  };

  config = EDITOR_CONFIG;

  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.editPostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', [Validators.required, Validators.minLength(2)]],
      excerpt: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.postId = this.activatedRoute.snapshot.paramMap.get("postId");
    console.log(this.postId)
    if (this.postId) {
      this.editMode = true;
      this.pageTitle = "Edit post";
      this.postService.getPost(this.postId)
        .subscribe((post: Post) => {
          this.editPostForm.controls["title"].patchValue(post.title);
          this.editPostForm.controls["content"].patchValue(post.content);
          this.editPostForm.controls["category"].patchValue(post.category);
          console.log(this.editPostForm)
        });
    }
  }

  get f() { return this.editPostForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editPostForm.invalid) {
      return;
    }

    if (!this.editMode) {
      this.loading = true;
      this.postService.postPost({
        title: this.f.title.value,
        content: this.f.content.value,
        category: this.f.category.value,
        excerpt: this.f.excerpt.value
      })
        .subscribe((post: Post) => {
          this.loading = true;
          this.router.navigate(['/users', this.user.id]);
        });
    } else {
      this.postService.putPost(this.postId, {
        title: this.f.title.value,
        content: this.f.content.value,
        category: this.f.category.value,
        excerpt: this.f.excerpt.value
      })
        .subscribe((post: Post) => {
          this.loading = true;
          this.router.navigate(['/users', this.user.id]);
        });
    }

  }

}
