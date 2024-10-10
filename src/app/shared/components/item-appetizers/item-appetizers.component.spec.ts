import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAppetizersComponent } from './item-appetizers.component';

describe('ItemAppetizersComponent', () => {
  let component: ItemAppetizersComponent;
  let fixture: ComponentFixture<ItemAppetizersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemAppetizersComponent]
    });
    fixture = TestBed.createComponent(ItemAppetizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
