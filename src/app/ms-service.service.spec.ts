// import { TestBed } from '@angular/core/testing';

// import { MsServiceService } from './ms-service.service';

// describe('MsServiceService', () => {
//   let service: MsServiceService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(MsServiceService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
 
// new code

// import { TestBed, async , inject } from '@angular/core/testing';
// import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
// import { HttpClient,HttpErrorResponse } from '@angular/common/http';

// import {MsServiceService} from './ms-service.service';

// describe('HttpClient testing', ()=>{
//   let HttpClient : HttpClient;
//   let HttpTestingController : HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports : [HttpClientTestingModule]
//     });
//     HttpClient = TestBed.get(HttpClient);
//     HttpTestingController = TestBed.get(HttpTestingController);
//   });
//      it('should be created : MsServiceService', inject([MsServiceService], (service : MsServiceService) => {
//        expect(service).toBeTruthy();
//      }));
// });


// new code 2

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MsServiceService } from './ms-service.service';

// describe('MsServiceService', () => {
//   let component: MsServiceService;
//   let fixture: ComponentFixture<MsServiceService>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ MsServiceService ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MsServiceService);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// new code 3

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MsServiceService } from '../app/ms-service.service';


describe('SearchComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [MsServiceService]
      }));

       it('should be created', () => {
        const service: MsServiceService = TestBed.get(MsServiceService);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: MsServiceService = TestBed.get(MsServiceService);
        expect(service.getData).toBeTruthy();
       });

    });