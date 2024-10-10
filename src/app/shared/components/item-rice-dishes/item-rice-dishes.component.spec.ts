import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRiceDishesComponent } from './item-rice-dishes.component';

describe('ItemRiceDishesComponent', () => {
  let component: ItemRiceDishesComponent;
  let fixture: ComponentFixture<ItemRiceDishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemRiceDishesComponent]
    });
    fixture = TestBed.createComponent(ItemRiceDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
