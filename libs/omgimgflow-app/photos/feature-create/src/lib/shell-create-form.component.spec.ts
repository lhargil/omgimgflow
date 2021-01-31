import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellCreateFormComponent } from './shell-create-form.component';

describe('ShellCreateFormComponent', () => {
  let component: ShellCreateFormComponent;
  let fixture: ComponentFixture<ShellCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
