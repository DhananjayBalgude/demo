import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Services } from 'src/app/Services';
@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.scss']
})
export class TimelogComponent {
  dataTaskdetail: any = [];
  peoplee: any[]=[];
  toppings = new FormControl('');

  constructor( private service: Services,private person: Services ) {
    this.service. getTaskdetail().subscribe((dataa) => {
      this.dataTaskdetail = dataa;
console.log(this.dataTaskdetail)
    });

    this.person.getPeople().subscribe((data)=>{
      this.peoplee=data;

    });




  }
}
