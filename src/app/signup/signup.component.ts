import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../shared/validators';

@Component({
  selector: 'mb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  signupForm: any;
  submitted = false;
  returnUrl: string;
  error = '';
  showErrorForm:boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)] ),
      passwordRepeat: new FormControl('', [Validators.required])
    },  {
      validator: MustMatch('password', 'passwordRepeat')
  } );
  }

  get f() { return this.signupForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.authService.signup(this.f.email.value, this.f.username.value, this.f.password.value)
      .subscribe((user: User) => {
        this.showErrorForm = false;
        this.router.navigate(['/login']);
      },
      (response =>{
        this.showErrorForm = true;
        this.error = response.error.message;
      }));
  }


}
