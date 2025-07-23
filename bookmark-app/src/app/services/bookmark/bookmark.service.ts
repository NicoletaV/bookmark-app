import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/models/bookmark/bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  baseURL: string = 'http://localhost:3000';
  serviceURL: string = `${this.baseURL}/bookmarks`
  private http = inject(HttpClient);

  getAllBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.serviceURL);
  }
}
