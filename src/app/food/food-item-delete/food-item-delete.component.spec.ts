import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemDeleteComponent } from './food-item-delete.component';

describe('FoodItemDeleteComponent', () => {
  let component: FoodItemDeleteComponent;
  let fixture: ComponentFixture<FoodItemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
