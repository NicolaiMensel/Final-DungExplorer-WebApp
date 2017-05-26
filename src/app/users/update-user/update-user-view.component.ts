import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'mrr-update-user-view',
  templateUrl: 'update-user-view.component.html',
  styleUrls: ['update-user-view.component.css']
})
export class UpdateUserViewComponent implements OnInit {

  @Input()
  inputUser : User;

  @Output()
  tryUpdateEmitter = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    console.log('user input', this.inputUser);
  }

  tryUpdate(){
    this.tryUpdateEmitter.emit(this.inputUser)
  }

}
