import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from '../bookmarks/state/bookmarks.reducer';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BookmarksEffects } from './state/bookmarks.effects';


@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BookmarksEffects]),
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ]
})
export class BookmarksModule { }
