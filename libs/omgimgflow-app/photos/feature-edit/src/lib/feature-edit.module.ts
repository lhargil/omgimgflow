import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellEditComponent } from './shell-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShellEditFormComponent } from './shell-edit-form.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ShellEditComponent }]),
    FormlyModule.forRoot(),
  ],
  declarations: [ShellEditComponent, ShellEditFormComponent],
})
export class FeatureEditModule {}
