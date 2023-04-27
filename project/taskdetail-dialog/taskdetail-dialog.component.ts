import { Component } from '@angular/core';
import { Services } from 'src/app/Services';
@Component({
  selector: 'app-taskdetail-dialog',
  templateUrl: './taskdetail-dialog.component.html',
  styleUrls: ['./taskdetail-dialog.component.scss']
})
export class TaskdetailDialogComponent {
  dataTaskdetail: any=[];
  peoplee: any=[];
  constructor( private service: Services, private person: Services) {
    this.service. getTaskdetail().subscribe((dataa) => {
      this.dataTaskdetail = dataa;

    });


    this.person.getPeople().subscribe((data)=>{
      this.peoplee=data;

    });
   }
}




