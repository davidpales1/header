import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleModeService {
  darkMode = localStorage.getItem('darkMode');
  mode = localStorage.getItem('mode');

  constructor(public styleModeService: StyleModeService) { }
  setDarkMode(mode){
    localStorage.setItem('darkMode', new Boolean(mode).toString());
    if (mode) {
      localStorage.setItem('mode','dark');
    } else {
      localStorage.setItem('mode','light');
    }
    window.location.reload()
  }
}
