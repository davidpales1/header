import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StyleModeService } from '../style-mode.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  userInfo = JSON.parse(localStorage.getItem('UserInfo')!);
  //authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });
  darkMode:boolean = JSON.parse(localStorage.getItem('darkMode'));


  constructor(
    private http: HttpClient,
    public styleModeService: StyleModeService,
    ) { }

  ngOnInit(): void {

  }

  toggleDarkMode() {
    this.styleModeService.setDarkMode(!this.darkMode)
  }
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('UserInfo');
    window.location.href = environment.LoginURL + 'ar/#/signOut' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language + "&" + "pathname=" + window.location.pathname;

  }
  // Subscription() {
  //   this.http.get(environment.SERVER_URL + 'api/customerPortal', { headers: this.authenticateHttpHeaders })
  //     .subscribe((portalUrl: any) => {
  //       // console.log(portalUrl)
  //       window.location.href = portalUrl[0]
  //       //this.router.navigate(['/login']);
  //     });
  // }
}
