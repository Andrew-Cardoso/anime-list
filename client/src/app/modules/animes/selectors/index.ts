import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AnimeReducerFeatureKey, AnimeState} from '../reducers';

export const selectAnimeState = createFeatureSelector<AnimeState>(AnimeReducerFeatureKey);

export const animes = createSelector(selectAnimeState, (state) => state.paginatedList.list);
export const pagination = createSelector(
	selectAnimeState,
	(state) => state.paginatedList.pagination,
);
export const storedList = createSelector(selectAnimeState, (state) => state.storedList);
