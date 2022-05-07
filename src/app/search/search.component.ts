import { Component, OnInit } from '@angular/core';
import { MsServiceService } from '../ms-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  getData(getData: any) {
    throw new Error('Method not implemented.');
  }

  Suggestions: Object | undefined;
  constructor(private msService:MsServiceService) { }

  ngOnInit(): void {
  }
  getBingSuggestion(searchTeam: any){
     this.msService.getBingSearchSuggestion(searchTeam).subscribe(
       (resp)=>{
         
         console.log(resp);
         this.Suggestions = resp;
       },
       (err)=>{
         console.log(err);
       }
     );
  }
}
