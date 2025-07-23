import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 
import { Store } from '@ngrx/store';
import { catchError, from, map, Observable, shareReplay } from 'rxjs';
import { Bookmark } from 'src/app/models/bookmark/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark/bookmark.service';
import { addAllBookmarks } from 'src/app/store/actions/bookmark.action';
import { BookmarkState } from 'src/app/store/reducers/bookmark.reducer';
import { FilterPipe } from 'src/app/utils/filter-pipe.pipe';

@Component({
  selector: 'app-list-bookmarks',
  templateUrl: './list-bookmarks.component.html',
  styleUrls: ['./list-bookmarks.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    FilterPipe,
  ]
})
export class ListBookmarksComponent implements OnInit {
  standardFilters: string[] = ['Today', 'Yesterday', 'Older'];
  bookmarkList: Bookmark[] = [];
  bookmark$: Observable<Bookmark[]> = from([])

  bookmarkService = inject(BookmarkService);
  store = inject(Store<BookmarkState>);
  
  ngOnInit(): void {  
    this.store.select(state => state.bookmarkReducer.bookmarks).subscribe(res => {
      this.bookmarkList = res;
      console.log('Got all bookmarks - from store');
      if (!this.bookmarkList || !this.bookmarkList.length) {
        this.getBookmarks();
      }
    });
  }

  getBookmarks() {
    this.bookmark$ = this.bookmarkService.getAllBookmarks().pipe(
      map(result => result),
      catchError(err => {
        console.error(err);
        throw err;
      }),
      shareReplay(1)
    );

    this.bookmark$.subscribe({
      next: result => {
        console.log(result);
        this.bookmarkList = result;

        this.store.dispatch({
          type: 'ADD_ALL_BOOKMARKS',
          payload: <Bookmark[]> this.bookmarkList
        });
      },
      complete: () => console.log('Got all bookmarks - from db')
    });
  }

  onClick(url: string) {
    window.open(url);
  }


}
