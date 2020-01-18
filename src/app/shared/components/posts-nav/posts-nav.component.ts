import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mb-posts-nav',
  templateUrl: './posts-nav.component.html',
  styleUrls: ['./posts-nav.component.less']
})
export class PostsNavComponent implements OnInit {

  isAuth: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuth()) {
      this.isAuth = true;
    }
  }

}
