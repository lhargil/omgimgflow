import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellPhotosComponent } from './containers/shell-photos/shell-photos.component';
import { PhotosFormComponent } from './components/photos-form/photos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellPhotosComponent,
      },
    ]),
  ],
  declarations: [ShellPhotosComponent, PhotosFormComponent],
  exports: [ShellPhotosComponent],
})
export class OmgimgflowAppPhotosModule {}
