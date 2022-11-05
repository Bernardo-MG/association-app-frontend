import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '@app/models/transaction';

@Component({
  selector: 'crud-form-transaction',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.sass']
})
export class TransactionFormComponent implements OnChanges {

  @Input() public data: Transaction = new Transaction();

  @Input() public disabledSave: boolean = false;

  @Input() public disabledDelete: boolean = false;

  @Output() public save = new EventEmitter<Transaction>();

  @Output() public delete = new EventEmitter<number>();

  public form: FormGroup = this.fb.group({
    id: [-1],
    description: ['', Validators.required],
    date: [new Date(), Validators.required],
    amount: [0, Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data'].firstChange) {
      // Create the date
      let formattedDate;
      let month;
      let day;

      const date = new Date(this.data.date);

      if (date.getMonth() >= 9) {
        month = `${date.getMonth() + 1}`;
      } else {
        month = `0${date.getMonth() + 1}`;
      }

      if (date.getDate() >= 10) {
        day = `${date.getDate()}`;
      } else {
        day = `0${date.getDate()}`;
      }

      formattedDate = `${date.getFullYear()}-${month}-${day}`;
      const update: any = {
        ...this.data,
        date: formattedDate
      }
      this.form.patchValue(update);
    }
  }

  public onSave() {
    this.save.emit(this.form.value);
  }

  public onDelete() {
    const id = this.form.get('id');

    if (id) {
      this.delete.emit(id.value);
    }
  }

  public canSave(): boolean {
    return ((!this.disabledSave) && (this.form.valid));
  }

  public canDelete(): boolean {
    return ((!this.disabledDelete) && (this.form.valid));
  }

  public isFormInvalid(): boolean {
    return this.form.invalid && (this.form.dirty || this.form.touched);
  }

}
