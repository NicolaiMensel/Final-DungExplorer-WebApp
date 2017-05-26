import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/show-users/users.component';
import {MaterialModule} from "@angular/material";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {Routes, RouterModule} from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';

import {UsersService} from "./users/user-service/users.service";
import {AuthService} from "./auth/auth.service";
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateUserViewComponent } from './users/create-user/create-user-view.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UpdateUserViewComponent } from './users/update-user/update-user-view.component';
import {MaterialdesignmoduleModule} from "./materialdesignmodule/materialdesignmodule.module";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ImageCropperComponent} from "ng2-img-cropper";
import { CreateTopicComponent } from './topics/create-topic/create-topic.component';
import { CreateTopicViewComponent } from './topics/create-topic/create-topic-view.component';
import {TopicsComponent} from "./topics/show-topics/topics.component";
import {TopicsViewComponent} from "./topics/show-topics/topics-view.component";
import { UsersViewComponent } from './users/show-users/users-view.component';
import { NewsfeedViewComponent } from './newsfeed/newsfeed-view.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ShowTopicComponent } from './topics/show-topic/show-topic.component';
import { ShowTopicViewComponent } from './topics/show-topic/show-topic-view.component';
import {TopicService} from "./topics/topic.service";

const routes: Routes = [
  { path: '', component: TopicsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'topics', component: TopicsComponent},
  { path: 'create-topic', component: CreateTopicComponent},
  { path: 'topics/:id', component: ShowTopicComponent},
  { path: 'users', component: UsersComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'users/:id', component: UpdateUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    NewsfeedComponent,
    LoginComponent,
    LoginViewComponent,
    CreateUserComponent,
    CreateUserViewComponent,
    UpdateUserComponent,
    UpdateUserViewComponent,
    TopicsComponent,
    ImageCropperComponent,
    TopicsViewComponent,
    CreateTopicComponent,
    CreateTopicViewComponent,
    UsersViewComponent,
    NewsfeedViewComponent,
    NewsfeedComponent,
    ShowTopicComponent,
    ShowTopicViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    MaterialdesignmoduleModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService, AuthService, TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
