import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../Services/navbar-service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnDestroy {
  showNavbar: boolean = true;
  subscription: Subscription;
  constructor(private navbarSr: NavbarService) {
    this.subscription = this.navbarSr.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
