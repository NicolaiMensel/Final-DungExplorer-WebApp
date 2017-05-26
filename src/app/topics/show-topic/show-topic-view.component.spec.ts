import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTopicViewComponent } from './show-topic-view.component';

describe('ShowTopicViewComponent', () => {
  let component: ShowTopicViewComponent;
  let fixture: ComponentFixture<ShowTopicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTopicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTopicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
