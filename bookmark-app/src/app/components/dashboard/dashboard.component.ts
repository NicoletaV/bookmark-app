import { Component } from '@angular/core';
import { ListBookmarksComponent } from '../list-bookmarks/list-bookmarks.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    ListBookmarksComponent,
  ]
})
export class DashboardComponent {

}
