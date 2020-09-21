import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { ConnectionInformationComponent } from 'src/app/connection/connection-information/connection-information.component';
import { ConnectionFormComponent } from './connection/connection-form/connection-form.component';
import { ConnectionEmptyComponent } from './connection/connection-empty/connection-empty.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ConnectionInformationComponent,
    ConnectionFormComponent,
    ConnectionEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
