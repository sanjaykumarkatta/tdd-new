import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './user.model';
import { of } from 'rxjs/internal/observable/of';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';


describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [UserService],
        imports: [HttpClientTestingModule],
    }));

    it('should be created', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service).toBeTruthy();
    });

    it('should return the list of userIds and userNames', inject([HttpTestingController, UserService],
        (httpMock: HttpTestingController, service: UserService) => {
           let dataMock = 'test success'
           let url = 'https://jsonplaceholder.typicode.com/users';
            service.getUserDetails().subscribe(data => {
                expect(data).toBe(dataMock);
            })
            const req = httpMock.expectOne(url);
            expect(req.request.url).toEqual('https://jsonplaceholder.typicode.com/users');
            expect(req.request.method).toEqual('GET');
            // Then we set the fake data to be returned by the mock
            // tslint:disable-next-line:max-line-length
            req.flush('test success');
        })
    );
});   