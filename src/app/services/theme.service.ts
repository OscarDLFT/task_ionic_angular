import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = new BehaviorSubject(false); //Observable

  constructor() { }

  /** Inicio de modo al abrir la app */
  setInitialTheme(): void {
    let darkMode = JSON.parse(localStorage.getItem('darkMode') as string);
    if (darkMode) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  /** Servicio para indicar el modo claro u oscuro */
  setTheme(darkMode: boolean): void {
    if (darkMode) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
    this.darkMode.next(darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }
}
