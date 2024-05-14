import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), AppComponent],
      providers: [Store]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
