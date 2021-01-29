import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './shell-list.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellListComponent,
      },
    ]),
  ],
  declarations: [ShellListComponent],
  exports: [ShellListComponent],
})
export class FeatureListModule {}
