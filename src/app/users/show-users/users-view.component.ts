import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../user";

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  users : Observable<User[]>;
  @Output()
  tryDeleteEmitter = new EventEmitter();
  @Output()
  tryUpdateEmitter = new EventEmitter();
  @Output()
  tryCreateEmitter = new EventEmitter();


  constructor() {

  }

  ngOnInit() {
  }

  tryDeleteUser(user)
  {
    this.tryDeleteEmitter.emit(user);
  }
  tryUpdateUser(user)
  {
    this.tryUpdateEmitter.emit(user);
  }
  tryCreateUser()
  {
    this.tryCreateEmitter.emit();
  }

}
