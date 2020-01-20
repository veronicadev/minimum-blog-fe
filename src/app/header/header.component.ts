import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean = false;
  user: User;
  loggedIn: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.isAuth()){
      this.loggedIn = true;
    }
  }

  onHeaderMenuClick(){
    this.openMenu = !this.openMenu;
  }

}
