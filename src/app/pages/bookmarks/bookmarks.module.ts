import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarReducer } from './state/bookmarks.reducer';



@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarReducer),
  ]
})
export class BookmarksModule { }
