import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDialogBodyComponent } from './add-project-dialog-body.component';

describe('AddProjectDialogBodyComponent', () => {
  let component: AddProjectDialogBodyComponent;
  let fixture: ComponentFixture<AddProjectDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProjectDialogBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
