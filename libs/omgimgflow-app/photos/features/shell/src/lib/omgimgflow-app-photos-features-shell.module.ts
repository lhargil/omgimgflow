import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'list',
          },
          {
            path: 'list',
            loadChildren: () =>
              import('@omgimgflow/omgimgflow-app/photos/features/list').then(
                (module) => module.OmgimgflowAppPhotosFeaturesListModule,
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class OmgimgflowAppPhotosFeaturesShellModule {}
