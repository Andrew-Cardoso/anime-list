import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, of, switchMap, withLatestFrom} from 'rxjs';
import {loadInitialData, finishLoadingInitialData, paginate, updatePagination} from '../actions';
import {AnimesService, PAGE_SIZE} from '../animes.service';
import {AnimeState, Pagination} from '../reducers';
import {animes, storedList, selectAnimeState} from '../selectors';

@Injectable()
export class AnimeListEffects {
	loadAnimes$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadInitialData),
			withLatestFrom(this.store.select(selectAnimeState)),
			switchMap(([, state]) =>
				state.initialized
					? of(finishLoadingInitialData(state))
					: this.animeService.getAnimes().pipe(
							map(({count, items}) =>
								finishLoadingInitialData({
									storedList: [[1, items]],
									initialized: true,
									paginatedList: {
										list: items,
										pagination: {
											currentPage: 1,
											pageSize: PAGE_SIZE,
											totalItems: count,
											totalPages: Math.ceil(count / PAGE_SIZE),
										},
									},
								}),
							),
					  ),
			),
		),
	);

	paginate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(paginate),
			withLatestFrom(this.store.select(storedList)),
			switchMap(([action, storedList]) => {
				console.log({action, storedList});
				const {page} = action;
				const storedItems = storedList.find(([p]) => page === p)?.[1];
				const store = !storedItems;
				return storedItems
					? of(updatePagination({items: storedItems, page, store}))
					: this.animeService
							.getAnimes((page - 1) * PAGE_SIZE)
							.pipe(map(({items}) => updatePagination({items, page, store})));
			}),
		),
	);

	constructor(
		private actions$: Actions,
		private animeService: AnimesService,
		private store: Store<AnimeState>,
	) {}
}
