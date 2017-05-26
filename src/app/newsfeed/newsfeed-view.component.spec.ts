import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedViewComponent } from './newsfeed-view.component';

describe('NewsfeedViewComponent', () => {
  let component: NewsfeedViewComponent;
  let fixture: ComponentFixture<NewsfeedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
