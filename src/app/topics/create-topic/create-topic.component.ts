import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {UsersService} from "../../users/user-service/users.service";
import {TopicService} from "../topic.service";
import {logging} from "selenium-webdriver";
import Logger = logging.Logger;
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  constructor(public loginValidationBar : MdSnackBar, private router : Router, private topicService : TopicService) {
  }

  ngOnInit() {

  }

  createForum(topic)
  {
    this.topicService.create(topic).subscribe(topic => this.router.navigate(["topics"]).then(() => this.loginValidationBar.open("Topic has been created!", "Ok", {
      duration: 3000,
    })));
  }

}
