import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-assignment';
  isDisplayEnabled = false;
  buttonClickLog = [];

  onButtonClick() {
    this.isDisplayEnabled = !this.isDisplayEnabled;
    this.buttonClickLog.push(this.buttonClickLog.length + 1 );
  }
}
