import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-archives-filter',
  imports: [MatListModule, MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './archives-filter.html',
  styleUrl: './archives-filter.scss',
})
export class ArchivesFilter {
  typesOfShoes: {value: string, name: string}[] = [
    {value: 'boots', name: 'Boots'},
    {value: 'clogs', name: 'Clogs'},
    {value: 'loafers', name: 'Loafers'},
    {value: 'moccasins', name: 'Moccasins'},
    {value: 'sneakers', name: 'Sneakers'},
  ];
}
