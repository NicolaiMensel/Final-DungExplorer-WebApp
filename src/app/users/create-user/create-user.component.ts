import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../user-service/users.service";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'mrr-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  returnUrl : string;
  constructor(private router : Router, private route : ActivatedRoute, private userService: UsersService, public loginValidationBar: MdSnackBar) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register(user)
  {
    this.userService.createUser(user);
    this.router.navigate([this.returnUrl.toString().replace(",", "/")]).then(() => this.loginValidationBar.open("Thx for signing up " + user.name + "!", "Ok", {
      duration: 3000,
    }));
  }

}
