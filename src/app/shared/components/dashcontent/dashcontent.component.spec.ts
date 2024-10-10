import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcontentComponent } from './dashcontent.component';

describe('DashcontentComponent', () => {
  let component: DashcontentComponent;
  let fixture: ComponentFixture<DashcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashcontentComponent]
    });
    fixture = TestBed.createComponent(DashcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
