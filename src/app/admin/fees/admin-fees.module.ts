import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlsModule } from '@app/controls/controls.module';
import { FeesModule } from '@app/crud/fees/fees.module';
import { FeeYearComponent } from './components/fee-year/fee-year.component';
import { AdminFeesRoutingModule } from './admin-fees-routing.module';
import { AdminFeeListViewComponent } from './views/admin-fee-list-view/admin-fee-list-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminFeeListViewComponent,
    FeeYearComponent
  ],
  imports: [
    CommonModule,
    AdminFeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FeesModule,
    ControlsModule
  ]
})
export class AdminFeesModule { }
