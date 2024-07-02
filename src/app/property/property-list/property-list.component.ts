import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      id: 1,
      Name: 'House1',
      Image: 'assets/house1.jpeg',
      Description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer ',
      Price: 10,
    },
    {
      id: 2,
      Name: 'House2',
      Image: 'assets/house2.jpeg',
      Description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      Price: 12,
    },
    {
      id: 3,
      Name: 'House3',
      Image: 'assets/house3.jpeg',
      Description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      Price: 15,
    },
    {
      id: 4,
      Name: 'House4',
      Image: 'assets/house4.jpeg',
      Description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      Price: 20,
    },
    {
      id: 5,
      Name: 'House5',
      Image: 'assets/house5.jpeg',
      Description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      Price: 22,
    },
    {
      id: 6,
      Name: 'House6',
      Image: 'assets/house6.jpeg',
      Description:
        'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      Price: 27,
    },
  ];
}
