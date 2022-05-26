import {createAction, props} from '@ngrx/store';
import {Anime} from '../models/anime';
import {AnimeState, PaginatedList} from '../reducers';

export const loadInitialData = createAction('[animelist] Load Initial Data');

export const finishLoadingInitialData = createAction(
	'[animelist] Finished Loading Initial Data',
	props<AnimeState>(),
);

export const paginate = createAction('[animelist] Paginate', props<{page: number}>());

export const updatePagination = createAction(
	'[animelist] Update Pagination',
	props<{items: Anime[]; page: number, store: boolean}>(),
);
