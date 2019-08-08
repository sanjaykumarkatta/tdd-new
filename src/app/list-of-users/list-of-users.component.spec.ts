import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUsersComponent } from './list-of-users.component';
import { UserComponent } from '../user/user.component';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';

describe('ListOfUsersComponent', () => {
    let component: ListOfUsersComponent;
    let fixture: ComponentFixture<ListOfUsersComponent>;
    let htmlRef: HTMLElement

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListOfUsersComponent, UserComponent],
            imports: [HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListOfUsersComponent);
        component = fixture.componentInstance;
        htmlRef = fixture.nativeElement as HTMLElement
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have the right heading', () => {
        expect(htmlRef.querySelector('h1').innerText).toBe('User List')
    })

});
