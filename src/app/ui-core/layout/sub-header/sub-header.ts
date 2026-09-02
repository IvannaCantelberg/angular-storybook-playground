import { Component } from '@angular/core';
import { LogoutButton } from '../../components/logout-button/logout-button';

@Component({
  selector: 'app-sub-header',
  imports: [LogoutButton],
  templateUrl: './sub-header.html',
  styleUrl: './sub-header.scss',
})
export class SubHeader {}
