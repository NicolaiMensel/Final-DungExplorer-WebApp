import { Component, OnInit } from '@angular/core';
import {Topic} from "../topics/topic";

@Component({
  selector: 'app-newsfeed',
  templateUrl: 'newsfeed.component.html',
  styleUrls: ['newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor() { }

  topics : Array<Topic>;

  ngOnInit() {
  }

}
