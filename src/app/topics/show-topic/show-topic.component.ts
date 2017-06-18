import { Component, OnInit } from '@angular/core';
import {Topic, TopicTypes} from "../topic";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../topic.service";
import {forEach} from "@angular/router/src/utils/collection";
import {UsersService} from "../../users/user-service/users.service";
import {User} from "../../users/user";
import {Debug} from "ng2-img-cropper/src/exif";
import {log} from "util";
import {Observable} from "rxjs/Observable";
import {ValidationErrors} from "@angular/forms";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-show-topic',
  templateUrl: './show-topic.component.html',
  styleUrls: ['./show-topic.component.css']
})
export class ShowTopicComponent implements OnInit {

  topic : Topic;

  constructor(public loginValidationBar: MdSnackBar, private router : Router, private route : ActivatedRoute, private topicService : TopicService, private userService : UsersService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.topicService.getTopic(params['id']).subscribe(topic => this.topic = this.getTopicData(topic));
    });
  }

  getTopicData(t : Topic)
  {
    let subTopics : Topic[];
    subTopics = [];

    for (let i = 0; i < t.subTopics.length; i++)
    {
      this.topicService.getTopic(t.subTopics[i]).subscribe(topic => {topic = this.addSubTopics(topic), subTopics.push(topic)});
    }
     t.subTopics = subTopics;
    return t;
  }

  private addSubTopics(topic : Topic) {

    let subComments = [];

    for(let subTopic of topic.subTopics)
    {
      this.topicService.getTopic(subTopic).subscribe(topic => {subComments.push(topic)});
    }
    topic.subTopics = subComments;
    return topic;
  }

  addComment(commentData : Topic[])
  {
    this.topicService.addTopic(commentData[0].id, commentData[1]).subscribe(() => this.topicService.getTopic(this.topic.id)
      .subscribe(refreahedTopic => this.topic = this.getTopicData(refreahedTopic)));
  }

deleteTopic(topic : Topic)
{
  for (let t of topic.subTopics) {
    for (let st of t.subTopics) {
      this.doDelete(st).subscribe();
    }
    this.doDelete(t).subscribe();
  }
  return this.doDelete(topic).subscribe(deletedTopic => topic.topicType == TopicTypes.Comments ? this.topicService.getTopic(this.topic.id).subscribe(refreahedTopic => this.topic = this.getTopicData(refreahedTopic)) : this.router.navigate(['/topics'])
    .then(() => this.loginValidationBar.open("Topic has been deleted!", "Ok", {
    duration: 3000,
  })));

}

private doDelete(topic : Topic) : Observable<Topic>
{
  return this.topicService.deleteTopic(topic);
}
}
