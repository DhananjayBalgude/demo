import { Component } from '@angular/core';
import { Services } from 'src/app/Services';

@Component({
  selector: 'app-addtasklist',
  templateUrl: './addtasklist.component.html',
  styleUrls: ['./addtasklist.component.scss'],
})
export class AddtasklistComponent {
  tempdata: any[] = [];
  constructor(private template: Services) {
    this.template.gettemp().subscribe((data) => {
      this.tempdata = data;
      console.log('tmp', this.tempdata);
    });
  }
}
