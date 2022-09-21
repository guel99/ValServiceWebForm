import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyRequestComponent } from './components/policy-request/policy-request.component';
import { ValidationRequestComponent } from './components/validation-request/validation-request.component';

const routes: Routes = [
  { path: 'validate', component: ValidationRequestComponent},
  { path: 'policy', component:PolicyRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
