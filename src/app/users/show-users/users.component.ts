import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {forEach} from "@angular/router/src/utils/collection";
import {UsersService} from "../user-service/users.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {CropperSettings} from "ng2-img-cropper";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: Promise<User[]>;



  constructor(private userService: UsersService, private router: Router) {

      this.users = userService.getUsers();

  }

  ngOnInit() {
  }

  createUser()
  {
    this.router.navigate(["/create-user"]);
  }


  deleteUser(user: User)
  {
    this.userService.deleteUser(user);
  }

  updateUser(user: User)
  {
    this.router.navigate(["/users/" + user.id]);
  }



}
