import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectDialogBodyComponent } from './add-project-dialog-body/add-project-dialog-body.component';
import { SubmenuDialogComponent } from './submenu-dialog/submenu-dialog.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { TasklistComponent } from './tasklist/tasklist.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTreeModule } from '@angular/material/tree';
import { AddtasklistComponent } from './addtasklist/addtasklist.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { TaskdetailDialogComponent } from './taskdetail-dialog/taskdetail-dialog.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TimelogComponent } from './timelog/timelog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { QuickLogTimeComponent } from './quick-log-time/quick-log-time.component';
import { AddtaskComponent } from './addtask/addtask.component';
import {MatSliderModule} from '@angular/material/slider';

import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    ProjectlistComponent,
    AddProjectDialogBodyComponent,
    SubmenuDialogComponent,
    TasklistComponent,
    TaskdetailComponent,
    TaskdetailDialogComponent,
    TimelogComponent,
    AddtasklistComponent,
    QuickLogTimeComponent,
    AddtaskComponent,

  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatGridListModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
    MatChipsModule,
    MatTreeModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatSliderModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    CdkTreeModule
  ],
  entryComponents: [
    AddProjectDialogBodyComponent,
    SubmenuDialogComponent,
    AddtasklistComponent,
  ],
  exports: [ProjectlistComponent],
})
export class ProjectModule {

}
