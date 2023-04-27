import { Component } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent {

  value = 0;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + '';
    }

    return `${value}`;
  }
}
