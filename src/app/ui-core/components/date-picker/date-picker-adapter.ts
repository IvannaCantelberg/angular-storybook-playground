import { addModuleImportToRootModule } from '@angular/cdk/schematics';
import { inject, Inject, Injectable } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';

enum DateControl {
  INPUT = 'input',
  MONTH_YEAR = 'monthYear'
}


@Injectable()
export class DatePickerAdapter extends NativeDateAdapter {
    #locale = inject<string>(MAT_DATE_LOCALE);
   

  override format(date: Date, displayFormat: any): string{
console.log(displayFormat,this.#locale, 'locale', date, 'date');


    if (displayFormat === DateControl.INPUT) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
    
      return `${day}-${month}-${year}`; 
    }

    // if (displayFormat === DateControl.MONTH_YEAR) {
    //   const month = date.toDateString().split(' ')[1];
    //   console.log(month, 'month', date.toDateString().split(' ')[1]);
    //   const year = date.getFullYear();

    //   return `${month} ${year}`;
    // }

    return date.toLocaleDateString(this.#locale, { day: '2-digit', month: 'short', year: 'numeric' });
  }
}