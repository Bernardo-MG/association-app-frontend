import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityChangePasswordFormComponent } from './security-change-password-form.component';

describe('SecurityChangePasswordFormComponent', () => {
  let component: SecurityChangePasswordFormComponent;
  let fixture: ComponentFixture<SecurityChangePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityChangePasswordFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
