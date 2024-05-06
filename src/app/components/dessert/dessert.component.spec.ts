import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertComponent } from './dessert.component';

describe('DessertComponent', () => {
  let component: DessertComponent;
  let fixture: ComponentFixture<DessertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertComponent]
    });
    fixture = TestBed.createComponent(DessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
