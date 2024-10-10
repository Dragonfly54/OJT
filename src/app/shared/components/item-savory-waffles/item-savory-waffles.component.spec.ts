import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSavoryWafflesComponent } from './item-savory-waffles.component';

describe('ItemSavoryWafflesComponent', () => {
  let component: ItemSavoryWafflesComponent;
  let fixture: ComponentFixture<ItemSavoryWafflesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSavoryWafflesComponent]
    });
    fixture = TestBed.createComponent(ItemSavoryWafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
