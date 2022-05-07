// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HeaderComponent } from './header.component';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// new code 

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderComponent } from '../header/header.component';


describe('HeaderComponent', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [HeaderComponent]
      }));

       it('should be created', () => {
        const service: HeaderComponent = TestBed.get(HeaderComponent);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: HeaderComponent = TestBed.get(HeaderComponent);
        expect(service.getData).toBeTruthy();
       });

    });