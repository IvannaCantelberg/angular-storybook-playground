import { Component } from '@angular/core';
import { CompanyLogo } from '../../components/company-logo/company-logo';

@Component({
  selector: 'app-header',
  imports: [CompanyLogo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderTest {}
