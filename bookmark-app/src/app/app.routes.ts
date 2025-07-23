import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddBookmarksComponent } from "./components/add-bookmarks/add-bookmarks.component";
import { EditBookmarksComponent } from "./components/edit-bookmarks/edit-bookmarks.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bookmarks',
    pathMatch: 'full',
  },
  {
    path: 'bookmarks',
    // component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'add',
        component: AddBookmarksComponent,
      },
      {
        path: 'edit',
        component: EditBookmarksComponent,
      },
    ],
  },
  {
    path : '**',
    redirectTo : 'bookmarks',
    pathMatch : 'full',
  },
];
