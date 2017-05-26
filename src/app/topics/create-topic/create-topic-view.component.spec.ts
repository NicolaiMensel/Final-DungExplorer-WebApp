import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopicViewComponent } from './create-topic-view.component';

describe('CreateTopicViewComponent', () => {
  let component: CreateTopicViewComponent;
  let fixture: ComponentFixture<CreateTopicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTopicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTopicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
