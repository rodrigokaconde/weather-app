import { createAction, createSelector, props } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{query: string}>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[Wheather API] Load Current Weather Success',
    props<{entity: any}>(),
);

export const loadCurrentWeatherFailed = createAction(
    '[Wheather API] Load Current Weather Failed',
);

export const toogleBookmark = createAction(
    '[Home] Toggle bBookmar',
    props<{ entity: Bookmark}>(),
);

export const clearHomeState = createAction(
    '[Home] Clear Home State'
);