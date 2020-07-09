import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  // /* Test component is receated successful */
  // it('should create', () => {
  //   expect(component).toBeTruthy(); 
  // });

  // /* Test component has a variable that content your message */
  // it('Should have the message `This is a content!`',() => {
  //   console.log(component.content)
  //   expect(component.content).toBe('This is a content!'); 
  // });

  // it('Should have H2 tag of `Click me Button!`',() => {
  //   expect(debug.query(By.css('h2')).nativeElement.innerText).toBe('Click me!');
  // });
});