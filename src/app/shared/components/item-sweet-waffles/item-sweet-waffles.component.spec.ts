import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSweetWafflesComponent } from './item-sweet-waffles.component';

describe('ItemSweetWafflesComponent', () => {
  let component: ItemSweetWafflesComponent;
  let fixture: ComponentFixture<ItemSweetWafflesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSweetWafflesComponent]
    });
    fixture = TestBed.createComponent(ItemSweetWafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
