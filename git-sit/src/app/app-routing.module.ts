import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TeamComponent } from './team/team.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
