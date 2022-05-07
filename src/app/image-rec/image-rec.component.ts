import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MsServiceService } from '../ms-service.service';

@Component({
  selector: 'app-image-rec',
  templateUrl: './image-rec.component.html',
  styleUrls: ['./image-rec.component.css']
})
export class ImageRecComponent implements OnInit {
  getData(getData: any) {
    throw new Error('Method not implemented.');
  }
 imageURLPreview ='';
  analyzedImageData: Object | undefined;
  imageURL: any;
  constructor(private msService: MsServiceService) { }

  ngOnInit(): void {
  }
  analyzeimage(imagedata: NgForm){
    console.log(imagedata.value.imageURL);
   this.imageURLPreview = imagedata.value.imageURL;
   this.msService.computerVisionService(this.imageURLPreview).subscribe(res=>{
    console.log(res);
    this.analyzedImageData = res;
   },(err)=>{
     console.log(err);
   });
   imagedata.reset();
  }
 
}
