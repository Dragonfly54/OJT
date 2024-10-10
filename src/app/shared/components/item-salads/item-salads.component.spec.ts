import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSaladsComponent } from './item-salads.component';

describe('ItemSaladsComponent', () => {
  let component: ItemSaladsComponent;
  let fixture: ComponentFixture<ItemSaladsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSaladsComponent]
    });
    fixture = TestBed.createComponent(ItemSaladsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
