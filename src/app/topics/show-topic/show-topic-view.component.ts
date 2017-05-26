import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic, TopicTypes} from "../topic";
import {Content} from "../content";
import {Debug} from "ng2-img-cropper/src/exif";
import {User, UserRoles} from "../../users/user";
import {DomSanitizer} from "@angular/platform-browser";
import {TopicService} from "../topic.service";
import {Observable} from "rxjs/Observable";
import {UsersService} from "../../users/user-service/users.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-show-topic-view',
  templateUrl: './show-topic-view.component.html',
  styleUrls: ['./show-topic-view.component.css']
})
export class ShowTopicViewComponent implements OnInit {

  @Input()
  topic : Topic;

  @Output()
  tryAddCommentEmitter = new EventEmitter();

  @Output()
  tryDeleteTopicEmitter = new EventEmitter();

  hideme: {};
  newComment : Topic;
  subComment : Topic;

  constructor(private authService : AuthService) {

  }

  ngOnInit() {
    this.initTopicTemplates();
    if(this.topic != null) {
      this.hideme = {};
      this.hideme[this.topic.id] = true;
    }
  }

  tryAddComment(comment : Topic, parentTopic : Topic) {
    this.tryAddCommentEmitter.emit([parentTopic as Topic, comment]);
    this.initTopicTemplates();
    this.hideme[parentTopic.id] = true;
  }

  getDateAsString(timeStamp : string){
    var date = new Date(timeStamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  isLoggedIn(){
    return this.authService.loggedIn();
  }

  isAuthorized(topicOwner : User) : boolean{
    return this.authService.isAuthorized(topicOwner.id);
  }


  initTopicTemplates(){
     this.topic = new Topic();
     this.topic.subTopics = [];
     this.topic.user = new User();
     this.newComment = new Topic();
     this.newComment.subTopics = [];
     this.newComment.user = new User();
    this.subComment = new Topic();
    this.subComment.user = new User();
  }

  onClick(item) {
    this.subComment.message = "";
    var hidden = this.hideme[item.id];
    Object.keys(this.hideme).forEach(h => {
      this.hideme[h] = true;
    });
    this.hideme[item.id] = !hidden;
    for (let something in this.hideme) {
      console.log(something);
      console.log(this.hideme[something]);
    }
  }

  deleteTopic(topic : Topic)
  {
    this.tryDeleteTopicEmitter.emit(topic);
  }

}
