import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BasePropertyInterface } from '../interfaces/property-Baseinterface';
import { PropertyInterface } from '../interfaces/property-interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(Purchaseable: number): Observable<PropertyInterface[]> {
    return this.http.get<PropertyInterface>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<PropertyInterface> = [];
        for (const id in data) {
          if (
            data.hasOwnProperty(id) &&
            data[id].Purchaseable === Purchaseable
          ) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
