import { createAction, props } from "@ngrx/store";
import { Bookmark } from "src/app/models/bookmark/bookmark.model";

export const addBookmark = createAction(
  'ADD_BOOKMARK',
  props<{ bookmark: Bookmark }>()
);

export const addAllBookmarks = createAction(
  'ADD_ALL_BOOKMARKS',
  props<{ bookmarks: Bookmark[] }>()
);
