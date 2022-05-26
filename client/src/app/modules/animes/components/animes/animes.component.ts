import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {loadInitialData} from '../../actions';
import {AnimeState} from '../../reducers';
import {animes} from '../../selectors';

@Component({
	selector: 'app-animes',
	templateUrl: './animes.component.html',
	styleUrls: ['./animes.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimesComponent implements OnInit {
	animesList$ = this.store.pipe(select(animes));

	constructor(private store: Store<AnimeState>) {}

	ngOnInit(): void {
		this.store.dispatch(loadInitialData());
	}
}
