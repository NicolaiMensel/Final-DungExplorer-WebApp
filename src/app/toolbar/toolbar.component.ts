import {Component, OnInit, Input} from '@angular/core';
import {User} from "../users/user";
import {AuthService} from "../auth/auth.service";
import {MdSnackBar} from "@angular/material";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mrr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input()
  title : string;
  authorized: Boolean;

  constructor(private authService: AuthService, public loginValidationBar: MdSnackBar, private router: Router, private route : ActivatedRoute)
  {
  }
  ngOnInit() {
    console.log(localStorage.getItem('token'));

  }

  isAuthenticated()
  {
    return this.authService.loggedIn();
  }

  login() {
    this.route.url.subscribe(url =>{
        this.router.navigate(['/login'], { queryParams: { returnUrl: url } })
    });
  }

  logout()
  {
    this.authorized = this.authService.logout();
    this.loginValidationBar.open("You are logged out", "Ok", {
      duration: 3000,
    });
  }
}
