import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/',
          },
          {
            path: 'photos',
            loadChildren: () => import('@omgimgflow/omgimgflow-app/photos/shell').then((module) => module.ShellModule),
          },
        ],
      },
    ]),
  ],
  declarations: [LayoutComponent],
  exports: [RouterModule],
})
export class OmgimgflowAppShellModule {}
