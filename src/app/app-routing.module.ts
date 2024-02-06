import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiComponent } from './hi/hi.component';
import { DataComponent } from './data/data.component';
import { ByeComponent } from './bye/bye.component';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';
const routes: Routes = [
 {path:"hi",component:HiComponent} ,
 {path:"data",component:DataComponent},
 {path:"edit/:id",component:EditComponent},
 {path:"app",component:AppComponent},
 {path:"bye",component:ByeComponent},
 {path:'',redirectTo:'hi',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
