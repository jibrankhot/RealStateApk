import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';
import { PropertyInterface } from 'src/app/interfaces/property-interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Purchaseable = 1;
  properties: Array<PropertyInterface>;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.Purchaseable = 2;
    } // means we are on rent-property url or else we are on base url
    this.housingService.getAllProperties(this.Purchaseable).subscribe(
      (data: PropertyInterface[]) => {
        console.log(data);
        console.log(this.route.snapshot.url.toString());
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
