import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent {
  public items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(value: string) {
    this.items.push({ value, inCart: false });
  }
}
