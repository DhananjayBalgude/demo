import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogBodyComponent } from '../add-project-dialog-body/add-project-dialog-body.component';
import { SubmenuDialogComponent } from '../submenu-dialog/submenu-dialog.component';
import { Services } from 'src/app/Services';
import { Project } from 'src/util/project';

const ELEMENT_DATA: Project[] = [];
@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
})
export class ProjectlistComponent {
  displayedColumns: string[] = [
    'name',
    'cname',
    'status',
    'tags',
    'startDate',
    'endDate',
  ];
  dataproject: any[] = [];

  constructor(
    public dialog: MatDialog,
    public submenu: MatDialog,
    private service: Services
  ) {
    this.service.getProject().subscribe((data) => {
      this.dataproject = data;
      console.log('Project ', this.dataproject);
    });
  }

  openprojectDialog() {
    this.dialog.open(AddProjectDialogBodyComponent, {
      width: '900px',
    });
  }
  openSubmenu() {
    this.submenu.open(SubmenuDialogComponent, {
      width: '400px',
      height: 'auto',
    });
  }
}
