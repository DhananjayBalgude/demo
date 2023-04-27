import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetailDialogComponent } from './taskdetail-dialog.component';

describe('TaskdetailDialogComponent', () => {
  let component: TaskdetailDialogComponent;
  let fixture: ComponentFixture<TaskdetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
