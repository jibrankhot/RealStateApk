import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../Services/navbar-service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { AlertyfyToastService } from '../Services/alertyfy-toast.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnDestroy {
  loggedinUser: string;
  showNavbar: boolean = true;
  subscription: Subscription;
  constructor(
    private navbarSr: NavbarService,
    private router: Router,
    private alertyfy: AlertyfyToastService
  ) {
    this.subscription = this.navbarSr.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    });
  }

  loggedIn() {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout() {
    setTimeout(() => {
      this.alertyfy.success('User Loggedout Successfully');
      this.router.navigate(['user', 'login']);
      localStorage.removeItem('token');
    }, 500);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
