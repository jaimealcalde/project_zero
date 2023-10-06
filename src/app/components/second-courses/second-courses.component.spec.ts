import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCoursesComponent } from './second-courses.component';

describe('SecondCoursesComponent', () => {
  let component: SecondCoursesComponent;
  let fixture: ComponentFixture<SecondCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondCoursesComponent]
    });
    fixture = TestBed.createComponent(SecondCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
