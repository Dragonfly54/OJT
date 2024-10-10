import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHotDrinksComponent } from './item-hot-drinks.component';

describe('ItemHotDrinksComponent', () => {
  let component: ItemHotDrinksComponent;
  let fixture: ComponentFixture<ItemHotDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemHotDrinksComponent]
    });
    fixture = TestBed.createComponent(ItemHotDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
