import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLogTimeComponent } from './quick-log-time.component';

describe('QuickLogTimeComponent', () => {
  let component: QuickLogTimeComponent;
  let fixture: ComponentFixture<QuickLogTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLogTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLogTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
