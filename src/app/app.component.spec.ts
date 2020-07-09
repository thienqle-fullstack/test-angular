import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hello-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hello-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hello-angular app is running!');
  });


  // https://www.youtube.com/watch?v=BumgayeUC08
  /* Add your test cases */
  /* Test component has a variable that content your message */
  it('1. Should have the message `This is a content!`',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    console.log(app.content)
    expect(app.content).toBe('This is a content!'); 
  });

  it('2. Should have button tag of `Click me Button!`',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const debug = fixture.debugElement;
    fixture.detectChanges();
    expect(debug.query(By.css('button')).nativeElement.innerText).toBe('Click me!');
  });

  it('3. should toggle the boolean',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.hide).toBeTruthy();
    console.log(app.hide)
    app.toggle();
    console.log(app.hide)
    expect(app.hide).toBeFalsy();
  });

});
