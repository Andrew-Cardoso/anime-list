import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/animes/animes.module').then((x) => x.AnimesModule),
	},
	{
		path: 'my-list',
		loadChildren: () => import('./modules/my-list/my-list.module').then((x) => x.MyListModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
