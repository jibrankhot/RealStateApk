import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card-item',
  templateUrl: './property-card-item.component.html',
  styleUrls: ['./property-card-item.component.css'],
})
export class PropertyCardItemComponent {
  public Property: any = {
    id: 1,
    Name: 'Birla House',
    Type: 'Mansion',
    Image: 'assets/house1.jpeg',
    Description:
      'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    Price: 12.5,
  };
}
