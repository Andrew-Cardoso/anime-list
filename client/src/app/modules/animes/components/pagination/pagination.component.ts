import {ChangeDetectionStrategy, Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {paginate} from '../../actions';
import {AnimeState} from '../../reducers';
import {pagination} from '../../selectors';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
	pagination$ = this.store.pipe(select(pagination));
	constructor(private store: Store<AnimeState>) {}

	onPageChange({page}: {page: number}) {
		this.store.dispatch(paginate({page}));
	}
}
