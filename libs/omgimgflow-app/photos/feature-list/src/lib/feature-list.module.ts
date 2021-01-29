import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './shell-list.component';
import { DataAccessModule } from '@omgimgflow/omgimgflow-app/photos/data-access';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShellListComponent,
      },
    ]),
  ],
  declarations: [ShellListComponent, ListComponent],
  exports: [ShellListComponent],
})
export class FeatureListModule {}
