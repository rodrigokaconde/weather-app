import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { RouterState } from "./state/router/router.reducer";

export interface AppState{
    router: RouterReducerState<RouterState>,
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
};

