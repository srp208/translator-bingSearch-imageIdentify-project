// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ImageRecComponent } from './image-rec.component';

// describe('ImageRecComponent', () => {
//   let component: ImageRecComponent;
//   let fixture: ComponentFixture<ImageRecComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ImageRecComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ImageRecComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



//  new code 

// import { TestBed, inject } from '@angular/core/testing';
// import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';


// import {ImageRecComponent} from './image-rec.component';

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
//      it('should be created : ImageRecComponent', inject([ImageRecComponent], (service : ImageRecComponent) => {
//        expect(service).toBeTruthy();
//      }));
// });


// new code 2

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ImageRecComponent } from './image-rec.component';

// describe('ImageRecComponent', () => {
//   let component: ImageRecComponent;
//   let fixture: ComponentFixture<ImageRecComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ImageRecComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ImageRecComponent);
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
import { ImageRecComponent } from '../image-rec/image-rec.component';


describe('ImageRecComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [ImageRecComponent]
      }));

       it('should be created', () => {
        const service: ImageRecComponent = TestBed.get(ImageRecComponent);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: ImageRecComponent = TestBed.get(ImageRecComponent);
        expect(service.getData).toBeTruthy();
       });

    });