import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {UsersService} from "../../users/user-service/users.service";
import {TopicService} from "../topic.service";
import {logging} from "selenium-webdriver";
import Logger = logging.Logger;

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  constructor(private router : Router, private topicService : TopicService) {
  }

  ngOnInit() {

  }

  createForum(topic)
  {
    this.topicService.create(topic).subscribe(topic => this.router.navigate(["topics"]));
  }

}
