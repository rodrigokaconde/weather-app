import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

import * as fromHomeActions from '../../home/state/home.actions';
import * as fromBookmarksActions from './bookmarks.actions';

export interface BookmarksState{
    list: Bookmark[];
}

export const bookamrInitialState: BookmarksState = {
    list: [],
};

const reducer = createReducer(
    bookamrInitialState,
    on(fromHomeActions.toogleBookmark, (state, {entity}) => ({
        ...state,
        list: toggleBookmark(state.list, entity),
    })),
    on(fromBookmarksActions.removeBookmark, (state, {id}) => ({
        ...state,
        list: state.list.filter(b => b.id !== id),
    })),
);

export function bookmarReducer(state: BookmarksState | undefined, action: Action){
    return reducer(state, action);
}

function toggleBookmark(list: Bookmark[], entity: Bookmark): Bookmark[]{
    if (!!list.find(Bookmark => Bookmark.id === entity.id)){
        return list.filter(Bookmark => Bookmark.id !== entity.id);
    }
    return [...list, entity];
}

