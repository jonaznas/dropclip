import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ConnectionInformationComponent } from 'src/app/connection/connection-information/connection-information.component';
import { ConnectionEmptyComponent } from 'src/app/connection/connection-empty/connection-empty.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: ConnectionEmptyComponent },
      { path: 'c', component: ConnectionInformationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
