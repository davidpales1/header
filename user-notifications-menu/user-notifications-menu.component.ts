import { Component, OnInit } from '@angular/core';
import { StyleModeService } from 'src/app/header/style-mode.service';

@Component({
  selector: 'app-user-notifications-menu',
  templateUrl: './user-notifications-menu.component.html',
  styleUrls: ['./user-notifications-menu.component.css']
})
export class UserNotificationsMenuComponent implements OnInit {

  constructor(public styleModeService: StyleModeService) { }

  ngOnInit(): void {
  }

}
