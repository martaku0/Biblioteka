import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiblioComponent } from './biblio/biblio.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:':name', component:BiblioComponent},
  {path:':name/:year', component:BiblioComponent},
  {path:"**", redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
