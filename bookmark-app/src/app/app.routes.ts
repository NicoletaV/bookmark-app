import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bookmarks',
    pathMatch: 'full',
  },
  {
    path: 'bookmarks',
    component: DashboardComponent,
  },
  {
    path : '**',
    redirectTo : 'bookmarks',
    pathMatch : 'full',
  },
];
