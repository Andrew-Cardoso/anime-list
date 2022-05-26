import {Pipe, PipeTransform} from '@angular/core';
import {Anime} from '../models/anime';

@Pipe({
	name: 'animeTitle',
	pure: true,
})
export class AnimeTitlePipe implements PipeTransform {
	transform(anime: Anime): string {
		const {en, en_jp, ja_jp} = anime.attributes.titles;
		return en_jp ?? en ?? ja_jp;
	}
}
