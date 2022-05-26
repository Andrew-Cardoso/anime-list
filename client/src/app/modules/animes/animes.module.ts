import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {AnimeReducerFeatureKey, reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AnimeListEffects} from './effects/index.service';
import {AnimeTitlePipe} from './pipes/anime-title.pipe';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { AnimesComponent } from './components/animes/animes.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterComponent } from './components/filter/filter.component';

const routes: Routes = [
	{
		path: '',
		component: AnimesComponent,
	},
];

@NgModule({
	declarations: [AnimeTitlePipe, AnimesComponent, PaginationComponent, FilterComponent],
	imports: [
		CommonModule,
		FormsModule,
		PaginationModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature(AnimeReducerFeatureKey, reducers),
		EffectsModule.forFeature([AnimeListEffects]),
	],
})
export class AnimesModule {}
