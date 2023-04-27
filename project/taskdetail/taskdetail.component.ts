import { Component } from '@angular/core';
import { TimelogComponent } from '../timelog/timelog.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskdetailDialogComponent } from '../taskdetail-dialog/taskdetail-dialog.component';
import { Services } from 'src/app/Services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss'],
})
export class TaskdetailComponent {
  dataTaskdetail: any = [];

  constructor(
    public dialog: MatDialog,
    private service: Services,
    private http: HttpClient
  ) {
    this.service.getTaskdetail().subscribe((dataa) => {
      this.dataTaskdetail = dataa;
      console.log(this.dataTaskdetail);
    });
  }

  opentaskdetailDialog() {
    this.dialog.open(TaskdetailDialogComponent, {
      width: '800px',
    });
  }
  opentimelogDialog() {
    this.dialog.open(TimelogComponent, {
      width: '900px',
    });
  }
}
