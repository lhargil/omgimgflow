import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellCreateComponent } from './shell-create.component';
import { ShellCreateFormComponent } from './shell-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: ShellCreateComponent }]),
  ],
  declarations: [ShellCreateComponent, ShellCreateFormComponent],
})
export class FeatureCreateModule {}
