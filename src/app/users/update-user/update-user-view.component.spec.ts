import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserViewComponent } from './update-user-view.component';

describe('UpdateUserViewComponent', () => {
  let component: UpdateUserViewComponent;
  let fixture: ComponentFixture<UpdateUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
