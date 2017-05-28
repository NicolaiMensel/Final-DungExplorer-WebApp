import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {AuthService} from "../auth.service";
import {Subscription} from "rxjs";
import {UsersService} from "../../users/user-service/users.service";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'mrr-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  loginError: string;
  request: Subscription;
  tryingToLogin: boolean;

  constructor(public loginValidationBar: MdSnackBar, private route : ActivatedRoute, private router : Router, private authService: AuthService, private userService : UsersService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(user){
    this.tryingToLogin = true;
    if(this.request)
    {
      this.request.unsubscribe();
    }
    this.request = this.authService
      .login(user.email, user.password)
      .subscribe((lUser) => {
        if(lUser.length > 0)
        {
          this.loginError=null;

          this.userService.getMe().subscribe(user => {localStorage.setItem('loggedInUser', JSON.stringify(user));
            this.router.navigate([this.returnUrl.toString().replace(",", "/")])
              .then(() => this.loginValidationBar.open("Welcome " + user.name + "!", "Ok", {
                duration: 3000,
              }));
          });
        }
        else {
          this.loginError = 'not correct email or password';
        }
        this.tryingToLogin = false;
      });
  }
}
