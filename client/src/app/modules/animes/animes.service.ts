import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Anime} from './models/anime';

type SearchString = `[${string}]=${string}`;

type Response = {
	items: Anime[];
	count: number;
};

export const PAGE_SIZE = 8;

@Injectable({
	providedIn: 'root',
})
export class AnimesService {
	constructor(private http: HttpClient) {}

	getAnimes(offset = 0, search?: SearchString) {
		const filter = search ? '&' + search : '';
		const url = `http://localhost:3000/animes?pageSize=${PAGE_SIZE}&offset=${offset}${filter}`;
		return this.http.get<Response>(url);
	}
}
