import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Services } from 'src/app/Services';
@Component({
  selector: 'app-add-project-dialog-body',
  templateUrl: './add-project-dialog-body.component.html',
  styleUrls: ['./add-project-dialog-body.component.scss'],
})
export class AddProjectDialogBodyComponent {
  companytname: any = [];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    forthCtr1: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  isEditable = false;
  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private cname: Services
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.cname.getcompantName().subscribe((data) => {
      this.companytname = data;
      console.log(this.companytname);
    });
  }
}
