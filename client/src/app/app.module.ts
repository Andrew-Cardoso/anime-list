import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {NavComponent} from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {StoreDevtoolsModule} from '@ngrx/store-devtools'

@NgModule({
	declarations: [AppComponent, NavComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot(),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
