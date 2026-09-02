import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTest } from './ui-core/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderTest],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('moderm-test-app');
}
