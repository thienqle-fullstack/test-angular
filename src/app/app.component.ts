import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';

  content = 'This is a content!';
  hide = true;

  toggle(){
    this.hide =!this.hide;
  }
}
