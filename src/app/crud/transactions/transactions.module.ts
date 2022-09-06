import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from '@app/controls/controls.module';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionCreateViewComponent } from './views/transaction-create-view/transaction-create-view.component';
import { TransactionListViewComponent } from './views/transaction-list-view/transaction-list-view.component';
import { TransactionEditViewComponent } from './views/transaction-edit-view/transaction-edit-view.component';



@NgModule({
  declarations: [
    TransactionFormComponent,
    TransactionCreateViewComponent,
    TransactionListViewComponent,
    TransactionEditViewComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    ControlsModule
  ]
})
export class TransactionsModule { }