import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeService} from '../../_service/theme.service'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [CommonModule,MatSlideToggleModule,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

toggleTheme() {
  this.themeService.toggleTheme();
}
}
