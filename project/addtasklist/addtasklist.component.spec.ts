import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtasklistComponent } from './addtasklist.component';

describe('AddtasklistComponent', () => {
  let component: AddtasklistComponent;
  let fixture: ComponentFixture<AddtasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtasklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
