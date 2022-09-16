import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiUiModule } from '@app/api-ui/api-ui.module';
import { ControlsModule } from '@app/controls/controls.module';
import { FeeFormComponent } from './components/fee-form/fee-form.component';
import { FeesRoutingModule } from './fees-routing.module';
import { FeeCreateViewComponent } from './views/fee-create-view/fee-create-view.component';
import { FeeEditViewComponent } from './views/free-edit-view/fee-edit-view.component';
import { FeeListViewComponent } from './views/free-list-view/fee-list-view.component';
import { MemberSelectionModalComponent } from './components/member-selection-modal/member-selection-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    FeeFormComponent,
    FeeCreateViewComponent,
    FeeListViewComponent,
    FeeEditViewComponent,
    MemberSelectionModalComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ControlsModule,
    ApiUiModule
  ],
  exports: [
    FeeFormComponent,
    FeeCreateViewComponent
  ]
})
export class FeesModule { }
