import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TreedemoComponent } from '../demo/treedemo/treedemo.component';
const routes: Routes = [
  { path: 'projectlist', component: ProjectlistComponent },
  {path:'tasklist',component :TasklistComponent},
  {path:'taskdetail',component :TaskdetailComponent},
  {path:'demo',component :TreedemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
