import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellEditFormComponent } from './shell-edit-form.component';

describe('ShellEditFormComponent', () => {
  let component: ShellEditFormComponent;
  let fixture: ComponentFixture<ShellEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellEditFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
