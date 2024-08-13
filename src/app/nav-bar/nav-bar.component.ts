import { Component, OnInit } from '@angular/core';
import { AlertyfyToastService } from '../Services/alertyfy-toast.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;
  constructor(private alertyfy: AlertyfyToastService) {}

  ngOnInit() {}

  loggedin() {
    this.loggedinUser = localStorage.getItem('userName');
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertyfy.success('You are logged out !');
  }
}
