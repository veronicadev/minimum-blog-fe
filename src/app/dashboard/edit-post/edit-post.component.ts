import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../src/app/services/user.service';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.editPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  get f() { return this.editPostForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editPostForm.invalid) {
      return;
    }
        console.log({
          title: this.f.title.value,
          content: this.f.content.value,
          category: this.f.category.value
        })
    this.userService.postPost({
      title: this.f.title.value,
      content: this.f.content.value,
      category: this.f.category.value
    })
    .subscribe((post: Post) => {
      this.router.navigate(['/users', this.user.id]);
    });

  }

}
