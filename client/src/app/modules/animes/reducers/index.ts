import {Anime} from '../models/anime';
import {createReducer, on} from '@ngrx/store';
import {PAGE_SIZE} from '../animes.service';
import {finishLoadingInitialData, updatePagination} from '../actions/index';

export interface Pagination {
	currentPage: number;
	pageSize: number;
	totalItems: number;
	totalPages: number;
}

export interface PaginatedList<T> {
	list: T[];
	pagination: Pagination;
}

export type PaginationResult<T> = [number, T[]][];

export const AnimeReducerFeatureKey = 'animeslist';

export interface AnimeState {
	initialized: boolean;
	storedList: PaginationResult<Anime>;
	paginatedList: PaginatedList<Anime>;
}

const initialState: AnimeState = {
	initialized: false,
	storedList: [],
	paginatedList: {
		list: [],
		pagination: {
			currentPage: 0,
			pageSize: PAGE_SIZE,
			totalItems: 0,
			totalPages: 0,
		},
	},
};

export const reducers = createReducer<AnimeState>(
	initialState,
	on(finishLoadingInitialData, (_, state) => state),
	on(updatePagination, (state, {items, page, store}) => {
		const newState = {...state};
		const storedList = [...state.storedList];
		store && storedList.push([page, items]);
		newState.storedList = storedList;
		newState.paginatedList = {
			list: items,
			pagination: {
				...state.paginatedList.pagination,
				currentPage: page,
			},
		};
		return newState;
	}),
);
