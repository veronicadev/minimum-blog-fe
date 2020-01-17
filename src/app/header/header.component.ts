import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean = false;
  user: User;
  loggedIn: boolean = false;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.loggedIn = true;
    }
  }

  onHeaderMenuClick(){
    this.openMenu = !this.openMenu;
  }

}
