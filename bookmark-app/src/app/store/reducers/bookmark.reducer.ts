import { createReducer, on, State } from "@ngrx/store";
import { Bookmark } from "src/app/models/bookmark/bookmark.model";
import { addBookmark } from "../actions/bookmark.action";
import { BookmarkService } from "src/app/services/bookmark/bookmark.service";
import { inject } from "@angular/core";

export interface BookmarkState {
  readonly bookmarks: Bookmark[];
}

export const initialState: BookmarkState = {
  bookmarks: [],
};

export function bookmarkReducer(state: BookmarkState = initialState, action: any): BookmarkState {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        bookmarks: [...state.bookmarks, action.payload]
      };
    case 'ADD_ALL_BOOKMARKS':
      return {
        bookmarks: [...state.bookmarks, ...action.payload]
      };
    default:
      return state;
  }
}

// export const bookmarkReducer2 = createReducer(
//   initialState,
//   on(addBookmark, (state, bookmark) => ({ bookmarks: [...state.bookmarks, bookmark] }))
// );
