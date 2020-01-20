import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean = false;
  user: User;
  loggedIn: boolean = false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.userLoggedinEvent.subscribe(loggedIn =>{
      this.loggedIn = loggedIn;
    });
  }

  onHeaderMenuClick(){
    this.openMenu = !this.openMenu;
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/posts']);
  }

}
