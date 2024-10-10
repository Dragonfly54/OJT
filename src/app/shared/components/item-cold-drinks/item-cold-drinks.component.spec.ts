import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemColdDrinksComponent } from './item-cold-drinks.component';

describe('ItemColdDrinksComponent', () => {
  let component: ItemColdDrinksComponent;
  let fixture: ComponentFixture<ItemColdDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemColdDrinksComponent]
    });
    fixture = TestBed.createComponent(ItemColdDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
