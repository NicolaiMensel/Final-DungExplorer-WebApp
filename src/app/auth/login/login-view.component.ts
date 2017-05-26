import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {User} from "../../users/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'mrr-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Input()
  user : any;

  @Input()
  signInError : string;

  @Input()
  tryingToLogIn: boolean;

  @Output('login')
  tryLoginEmitter = new EventEmitter();

  returnUrl : string;

  tryLogin(){
    this.tryLoginEmitter.emit(this.user);
  }
  constructor(private router : Router, private route : ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  goBack() {
    this.router.navigate([this.returnUrl.toString().replace(",", "/")]);
  }

  register()
  {
    this.route.url.subscribe(url =>{
      this.router.navigate(['/create-user'], { queryParams: { returnUrl: url } })
    });
  }
}
