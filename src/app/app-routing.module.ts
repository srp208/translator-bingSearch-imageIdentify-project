import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageRecComponent } from './image-rec/image-rec.component';
import { SearchComponent } from './search/search.component';
import { TranslateComponent } from './translate/translate.component';

const routes: Routes = [
  {path:'Image-rec', component:ImageRecComponent},
  {path:'translate', component:TranslateComponent},
  {path:'Search', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
