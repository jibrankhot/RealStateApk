import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../Services/navbar.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  constructor(private navbarSr: NavbarService) {}
  ngOnInit(): void {
    this.navbarSr.hide();
  }
  ngOnDestroy(): void {
    this.navbarSr.display();
  }
}
