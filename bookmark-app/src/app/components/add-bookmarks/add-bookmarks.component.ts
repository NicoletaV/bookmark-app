import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookmarkState } from 'src/app/store/reducers/bookmark.reducer';
import { addBookmark } from 'src/app/store/actions/bookmark.action';
import { Bookmark } from 'src/app/models/bookmark/bookmark.model';

@Component({
  selector: 'app-add-bookmarks',
  templateUrl: './add-bookmarks.component.html',
  styleUrls: ['./add-bookmarks.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddBookmarksComponent {
  bookmarkForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required])
  });
  router = inject(Router);
  store = inject(Store<BookmarkState>);

  addBookmark() {
    this.store.dispatch({
      type: 'ADD_BOOKMARK',
      payload: <Bookmark> {
        name: this.bookmarkForm.controls.name.value || '',
        url: this.bookmarkForm.controls.url.value || '',
        created: 'today'
      }
    });
    this.router.navigate(['/bookmarks']);
  }
}
