import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-bookmarks',
  templateUrl: './list-bookmarks.component.html',
  styleUrls: ['./list-bookmarks.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class ListBookmarksComponent {
  public standardFilters: string[] = ['Today', 'Yesterday', 'Older'];

  getBookmarks(filter: string): string[] {
    return ['b1', 'b2', 'b3'];
  }


}
