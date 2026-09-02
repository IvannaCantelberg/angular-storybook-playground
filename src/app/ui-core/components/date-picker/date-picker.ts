import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  MatDateFormats,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatePickerAdapter } from './date-picker-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'monthYear',
  },
};

@Component({
  selector: 'app-date-picker',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'nl-NL' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: DateAdapter, useClass: DatePickerAdapter },
  ],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  templateUrl: './date-picker.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './date-picker.scss',
})
export class DatePicker {}
