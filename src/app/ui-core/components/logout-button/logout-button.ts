import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logout-button',
  imports: [MatButtonModule],
  templateUrl: './logout-button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logout-button.scss',
})
export class LogoutButton {}
