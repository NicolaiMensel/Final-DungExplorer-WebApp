import { Component, OnInit } from '@angular/core';
import {Topic, TopicTypes} from "../topic";
import {Timestamp} from "rxjs";
import {Router} from "@angular/router";
import {TopicService} from "../topic.service";
import {Observable} from "rxjs/Observable";
import {toArray} from "rxjs/operator/toArray";

@Component({
  selector: 'mrr-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : Topic[];

  constructor(private router : Router, private serviceGateway : TopicService) {

  }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.serviceGateway.getTopics().subscribe(topics => this.topics = topics);
    /*[
     {id: "felix", title:'Forum has been created!!', timeStamp: new Date().toString(), type : Type.News, user: {name:'SirKalrin[Admin]', age:69, email:'SirKalrin.Supp@DExplorer.VR', password:'admin'},
     content : {message : "Greetings players and followers! It's now possible to use the forum to follow news, post about issues, or general discussions. Have fun and be constructive!"}, subTopics: []},
     {id: "ostekage", title:'Do you like the game concept?', timeStamp: new Date().toString(), type : Type.General, user: {name:'SirMensel[Admin]', age:69, email:'SirMensel.Supp@DExplorer.VR', password:'admin'},
     content : {message : "We'd like to hear if you have any ideas to our game, and if there is anything horrible!!"}, subTopics: []},
     {id: "langeshorts2",title:'I cannot download the game!!', timeStamp: new Date().toString(), type : Type.Support, user: {name:'Tim Andersen', age:12, email:'Tima@gmail.com', password:'1234'},
     content : {message : "I cannot locate the game on Google Play Store.. what to do?!?!"}, subTopics: []}
     ];*/
  }

  showTopic(id : string)
  {
    this.router.navigate(['/topics/', id]);
  }
}
