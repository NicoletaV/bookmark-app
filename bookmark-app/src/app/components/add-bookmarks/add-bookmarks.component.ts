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

  addBookmark() {
    console.log(this.bookmarkForm.controls.name.value)
    console.log(this.bookmarkForm.controls.url.value)
    this.router.navigate(['/bookmarks']);
    }
}
