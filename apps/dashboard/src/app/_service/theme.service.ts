import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleTheme(): void {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    console.log('next theme : ', next);
    document.documentElement.setAttribute('data-theme', next);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
  if (element) {
    element.classList.toggle('my-app-dark');
  }
}
  

  setTheme(theme: 'dark' | 'light'): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  getCurrentPrimeNgTheme(): string | null {
    return document.documentElement.getAttribute('class');
  }
  getCurrentDaisyTheme(): string | null {
    return document.documentElement.getAttribute('data-theme');
  }
}
