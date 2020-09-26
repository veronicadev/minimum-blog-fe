import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted = false;
  returnUrl: string;
  error = '';
  showErrorLogin:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    // redirect to home if already logged in
    /* if (this.authenticationService.currentUserValue) {
       this.router.navigate(['/']);
     }*/
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value)
      .subscribe((user: User) => {
        this.showErrorLogin = false;
        this.authService.setUser(user);
        this.router.navigate(['/posts/feed']);
      },
      (response =>{
        this.showErrorLogin = true;
        this.error = response.error.message;
      }));
  }

}
