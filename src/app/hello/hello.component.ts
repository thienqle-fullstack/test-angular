import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  content = 'This is a content!';
  hide = false;

  constructor() { }
 
  ngOnInit(): void {
  }

  toggle(){
    this.hide =!this.hide;
  }
}
