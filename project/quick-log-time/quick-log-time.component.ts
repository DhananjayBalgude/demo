import { Component } from '@angular/core';
import { Services } from 'src/app/Services';

// import { Project } from 'src/util/project';
@Component({
  selector: 'app-quick-log-time',
  templateUrl: './quick-log-time.component.html',
  styleUrls: ['./quick-log-time.component.scss']
})
export class QuickLogTimeComponent {
  dataproject: any[] = [];
  tasklistdata: any[] = [];
  constructor(
    private tasklist: Services,
    private service: Services
  ) {
    this.service.getProject().subscribe((data) => {
      this.dataproject = data;
      console.log('Project ', this.dataproject);
    });
    this.tasklist.getTasklist().subscribe((data) => {
      this.tasklistdata = data;
      console.log(this.tasklistdata);
    });
  }
}
