// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SearchComponent } from './search.component';

// describe('SearchComponent', () => {
//   let component: SearchComponent;
//   let fixture: ComponentFixture<SearchComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SearchComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchComponent);
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


// import {SearchComponent} from './search.component';

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
//      it('should be created : SearchComponent', inject([SearchComponent], (service : SearchComponent) => {
//        expect(service).toBeTruthy();
//      }));
// });


// new code 2

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SearchComponent } from './search.component';

// describe('SearchComponent', () => {
//   let component: SearchComponent;
//   let fixture: ComponentFixture<SearchComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SearchComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SearchComponent);
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
import { SearchComponent } from '../search/search.component';


describe('SearchComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [SearchComponent]
      }));

       it('should be created', () => {
        const service: SearchComponent = TestBed.get(SearchComponent);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: SearchComponent = TestBed.get(SearchComponent);
        expect(service.getData).toBeTruthy();
       });

    });