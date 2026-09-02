import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderTest } from '../../ui-core/layout/header/header';
import { SubHeader } from '../../ui-core/layout/sub-header/sub-header';
import { TopNavigation } from '../../ui-core/layout/top-navigation/top-navigation';
import { ArchivesFilter } from '../../ui-core/components/archives-filter/archives-filter';

@Component({
  selector: 'app-search-page',
  imports: [HeaderTest, SubHeader, TopNavigation, ArchivesFilter],
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './search-page.scss',
})
export class SearchPage {}
