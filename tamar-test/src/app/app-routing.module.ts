import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [{ path: '', redirectTo: '/qustion/1' ,pathMatch:'full'}, 
{ path: 'qustion/:id', component: QuestionsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
