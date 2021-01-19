import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellListComponent } from './containers/shell-list.component';
import { ListComponent } from './components/list.component';

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
  declarations: [ShellListComponent, ListComponent],
  exports: [ShellListComponent],
})
export class OmgimgflowAppPhotosFeaturesListModule {}
