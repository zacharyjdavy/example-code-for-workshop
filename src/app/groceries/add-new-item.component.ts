import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  @Output() newItem: EventEmitter<string>;

  constructor() {
    this.newItem = new EventEmitter();
  }

  submit(input: { value: string }) {
    this.newItem.emit(input.value);
    input.value = null;
  }
}
