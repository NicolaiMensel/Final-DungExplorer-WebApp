import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {validate} from "codelyzer/walkerFactory/walkerFn";
@Component({
  selector: 'mrr-create-user-view',
  templateUrl: 'create-user-view.component.html',
  styleUrls: ['create-user-view.component.css']
})
export class CreateUserViewComponent implements OnInit {

  newUser: User;

  returnUrl : string
  @Output()
  tryRegisterEmitter = new EventEmitter();


  constructor(private router : Router, private route : ActivatedRoute) {
    this.newUser = new User();
  }

  tryRegister(){
    this.tryRegisterEmitter.emit(this.newUser); // eventemitter = datasender
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  goBack() {
    this.router.navigate([this.returnUrl.toString().replace(",", "/")]);
  }

}
