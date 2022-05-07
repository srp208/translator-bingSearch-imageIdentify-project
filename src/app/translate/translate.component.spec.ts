// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TranslateComponent } from './translate.component';

// describe('TranslateComponent', () => {
//   let component: TranslateComponent;
//   let fixture: ComponentFixture<TranslateComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ TranslateComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TranslateComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


//  new code 

// import { TestBed, async , inject } from '@angular/core/testing';
// import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
// import { HttpClient,HttpErrorResponse } from '@angular/common/http';


// import {TranslateComponent} from './translate.component';

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
//      it('should be created : TranslateComponent', inject([TranslateComponent], (service : TranslateComponent) => {
//        expect(service).toBeTruthy();
//      }));
// });



// new code 2

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TranslateComponent } from './translate.component';

// describe('TranslateComponent', () => {
//   let component: TranslateComponent;
//   let fixture: ComponentFixture<TranslateComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ TranslateComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TranslateComponent);
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
import { TranslateComponent } from '../translate/translate.component';


describe('SearchComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [TranslateComponent]
      }));

       it('should be created', () => {
        const service: TranslateComponent = TestBed.get(TranslateComponent);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: TranslateComponent = TestBed.get(TranslateComponent);
        expect(service.getData).toBeTruthy();
       });

    });