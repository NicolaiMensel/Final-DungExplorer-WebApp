import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CropperSettings, ImageCropperComponent} from "ng2-img-cropper";
import {Topic} from "../topic";

@Component({
  selector: 'app-create-topic-view',
  templateUrl: './create-topic-view.component.html',
  styleUrls: ['./create-topic-view.component.css']
})
export class CreateTopicViewComponent implements OnInit {

  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper:ImageCropperComponent;

  newTopic: Topic;
  changingImage : boolean;

  @Output()
  tryCreateEmitter = new EventEmitter();




  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 625;
    this.cropperSettings.height = 339;
    this.cropperSettings.croppedWidth = 625;
    this.cropperSettings.croppedHeight = 339;
    this.cropperSettings.canvasWidth = 625;
    this.cropperSettings.canvasHeight = 339;
    this.cropperSettings.noFileInput = true;

    this.newTopic = new Topic();

    this.data = {};
  }

  ngOnInit() {
    this.newTopic = new Topic();
  }

  tryCreateForum(){
    // Dummy picture - Image storage not implemented yet!
    this.newTopic.imageUrl = "https://i.ytimg.com/vi/8TH288wBec4/maxresdefault.jpg";

    this.tryCreateEmitter.emit(this.newTopic);

    this.newTopic = new Topic();
  }

  changeImage()
  {
    this.changingImage = true;
  }

  saveNewImage(){
    this.changingImage = false;
    this.newTopic.imageUrl = this.data.image
  }

  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    this.changeImage();
    myReader.readAsDataURL(file);
  }
}
