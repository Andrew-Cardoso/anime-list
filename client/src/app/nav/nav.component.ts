import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements AfterViewInit {
	@ViewChild('nav', {static: true}) private nav!: ElementRef<HTMLElement>;
	@Output() setHeight = new EventEmitter<number>();

	constructor() {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			const height = this.nav.nativeElement.clientHeight;
			this.setHeight.emit(height + 2);
		});
	}
}
