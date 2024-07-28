import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertyfyToastService {
  constructor() {}

  success(message: string) {
    alertyfy.set('notifier', 'position', 'top-right');
    alertyfy.success(message);
  }
  warning(message: string) {
    alertyfy.set('notifier', 'position', 'top-right');
    alertyfy.warning(message);
  }
  error(message: string) {
    alertyfy.set('notifier', 'position', 'top-right');
    alertyfy.error(message);
  }
}
