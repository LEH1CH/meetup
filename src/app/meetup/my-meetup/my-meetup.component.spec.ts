import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMeetupComponent } from './my-meetup.component';

describe('MyMeetupComponent', () => {
  let component: MyMeetupComponent;
  let fixture: ComponentFixture<MyMeetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMeetupComponent]
    });
    fixture = TestBed.createComponent(MyMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
