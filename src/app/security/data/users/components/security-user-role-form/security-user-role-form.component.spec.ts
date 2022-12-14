import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SecurityUserRoleFormComponent } from './security-user-role-form.component';

describe('SecurityUserRoleFormComponent', () => {
  let component: SecurityUserRoleFormComponent;
  let fixture: ComponentFixture<SecurityUserRoleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        SecurityUserRoleFormComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SecurityUserRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
