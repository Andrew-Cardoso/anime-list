import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  height = '0px';

  setHeight(height: number) {
    this.height = `calc(100vh - ${height}px)`;
  }
}
