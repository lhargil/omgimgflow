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
              import('@omgimgflow/omgimgflow-app/photos/feature-list').then((module) => module.FeatureListModule),
          },
          {
            path: 'edit/:id',
            loadChildren: () =>
              import('@omgimgflow/omgimgflow-app/photos/feature-edit').then((module) => module.FeatureEditModule),
          },
          {
            path: 'create',
            loadChildren: () =>
              import('@omgimgflow/omgimgflow-app/photos/feature-create').then((module) => module.FeatureCreateModule),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
})
export class ShellModule {}
