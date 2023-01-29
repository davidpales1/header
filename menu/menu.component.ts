import { Component, OnInit, Inject  } from '@angular/core';
import { menu } from 'src/environments/menu';
import menuTranslations from 'src/locale/menu.json';

import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  constructor(@Inject(LOCALE_ID) public localeId: string) { }

  currentLang = this.localeId || 'en'; // or 'ar'
  menu = menu;
  menuTranslations= menuTranslations;

  ngOnInit(): void {
    console.log()

  }

}
