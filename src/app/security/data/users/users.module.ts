import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiUiModule } from '@app/api-ui/api-ui.module';
import { ControlsModule } from '@app/controls/controls.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SecurityUserFormComponent } from './components/security-user-form/security-user-form.component';
import { SecurityUserService } from './service/security-user.service';
import { UserRoutingModule } from './users-routing.module';
import { SecurityUserCreateViewComponent } from './views/security-user-create-view/security-user-create-view.component';
import { SecurityUserEditViewComponent } from './views/security-user-edit-view/security-user-edit-view.component';
import { SecurityUserListViewComponent } from './views/security-user-list-view/security-user-list-view.component';
import { SecurityUserRoleFormComponent } from './components/security-user-role-form/security-user-role-form.component';
import { SecurityUserRoleSelectionComponent } from './components/security-user-role-selection/security-user-role-selection.component';



@NgModule({
  declarations: [
    SecurityUserFormComponent,
    SecurityUserCreateViewComponent,
    SecurityUserEditViewComponent,
    SecurityUserListViewComponent,
    SecurityUserRoleFormComponent,
    SecurityUserRoleSelectionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ControlsModule,
    ApiUiModule
  ],
  providers: [
    SecurityUserService
  ]
})
export class UsersModule { }
