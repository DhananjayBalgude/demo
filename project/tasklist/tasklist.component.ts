import { Component } from '@angular/core';
import { Services } from 'src/app/Services';
import { MatDialog } from '@angular/material/dialog';
import { AddtasklistComponent } from '../addtasklist/addtasklist.component';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { HttpClient } from '@angular/common/http';
import { AddtaskComponent } from '../addtask/addtask.component';

import { FlatTreeControl } from '@angular/cdk/tree';

/** Flat node with expandable and level information */

interface attachment {
  name: string;
  attachments?: attachment[];
}

const TREE_DATA: attachment[] =
[
  {
    name: 'Companies',

    attachments: [
      {
        name: 'List Of Companies',
      },
      {
        name: 'Add Companies',
      },
    ],
  },

  {
    name: 'Dashboards',

    attachments: [
      {
        name: 'List Of Companies',
      },
      {
        name: 'Add Companies',
      },
    ],
  },
  {
    name: 'My Work',

    attachments: [
      {
        name: 'List Of Companies',
      },
      {
        name: 'Add Companies',
      },
    ],
  },
  {
    name: 'Planning',

    attachments: [
      {
        name: 'List Of Companies',
      },
      {
        name: 'Add Companies',
      },
    ],
  },
  {
    name: 'Project',

    attachments: [
      {
        name: 'List Of Companies',
      },
      {
        name: 'Add Companies',
      },
    ],
  },
  {
    name: 'Risks',

    attachments: [
      {
        name: 'List Of Companies',
      },
      {
        name: 'Add Companies',
      },
    ],
  },
];
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent {
  tasklistdata: any[] = [];
  taskdata: any[] = [];
  panelOpenState = false;
  tasklists: any = [];

  private _transformer = (node: attachment, level: number) => {
    return {
      expandable: !!node.attachments && node.attachments.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.attachments
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(
    private tasklist: Services,
    private task: Services,
    private tasklist1: Services,
    private task1: Services,
    public dialog: MatDialog,
    private client: HttpClient
  ) {
    this.tasklist.getTasklist().subscribe((data) => {
      this.tasklistdata = data;
    });
    this.task.getTasks().subscribe((data) => {
      this.taskdata = data;
    });

    this.dataSource.data = TREE_DATA;
  }


  httpOptions(API_URL: string, httpOptions: any) {
    throw new Error('Method not implemented.');
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  addtasklist() {
    this.dialog.open(AddtasklistComponent, {
      width: '600px',
    });
  }
  addtask() {
    this.dialog.open(AddtaskComponent);
  }
}
