import { Component, Input } from '@angular/core';
import { PropertyInterface } from 'src/app/interfaces/property-interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent {
  @Input() Property: PropertyInterface;
  @Input() hideIcons: boolean;
}
