import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeListViewComponent } from './fee-list-view.component';

describe('FreeListViewComponent', () => {
  let component: FeeListViewComponent;
  let fixture: ComponentFixture<FeeListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
