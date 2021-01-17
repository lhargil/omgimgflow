import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OmgimgflowAppShellModule } from '@omgimgflow/omgimgflow-app/shell';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, OmgimgflowAppShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
