import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'mb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  user: any;
  userLoading: boolean = true;
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.userService.getUser(params.get('userId')).subscribe(user=>{
        this.user = user;
        console.log(this.user)
        this.userLoading = false;
      })
    });
  }

}
