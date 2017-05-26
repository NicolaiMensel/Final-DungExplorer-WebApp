import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic, TopicTypes} from "../topic";
import {Observable} from "rxjs/Observable";
import {Debug} from "ng2-img-cropper/src/exif";

@Component({
  selector: 'app-topics-view',
  templateUrl: './topics-view.component.html',
  styleUrls: ['./topics-view.component.css']
})
export class TopicsViewComponent implements OnInit {

  commentType = TopicTypes.Comments;

  @Input()
  topics: Array<Topic>

  @Output()
  tryShowTopicEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if (!this.topics) {
      this.topics = new Array<Topic>();
    }
  }

  getDateAsString(timeStamp : string){
    var date = new Date(timeStamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  tryShowTopic(id : string)
  {
    this.tryShowTopicEmitter.emit(id);
  }
}
