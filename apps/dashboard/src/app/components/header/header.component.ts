import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeService} from '../../_service/theme.service'

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

toggleTheme() {
  this.themeService.toggleTheme();
}
}
