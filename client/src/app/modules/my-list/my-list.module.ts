import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyListComponent} from './components/my-list/my-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: MyListComponent,
	},
];

@NgModule({
	declarations: [MyListComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MyListModule {}
