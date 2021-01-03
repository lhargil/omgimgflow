import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPhotosComponent } from './shell-photos.component';

describe('ShellPhotosComponent', () => {
  let component: ShellPhotosComponent;
  let fixture: ComponentFixture<ShellPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellPhotosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
