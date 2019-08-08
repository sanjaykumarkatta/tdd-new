import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component'
import { UserComponent } from './user/user.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutes, routes } from './app-routing.module';
describe('AppComponent', () => {
let app, fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListOfUsersComponent,
        UserComponent
      ], imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
// const fixture = TestBed.createComponent(AppComponent);
    
    expect(app).toBeTruthy();
  });
});
