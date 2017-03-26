import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-list-all-items',
  templateUrl: './list-all-items.component.html',
  styleUrls: ['./list-all-items.component.css']
})

export class ListAllItemsComponent {
  @Input() items: Item[];
}
