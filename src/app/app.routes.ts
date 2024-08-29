import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrComponent } from './register/registr.component';
import { LoglnComponent } from './logln/logln.component';
export const routes: Routes = [
  {
    path:'',
    component: FrontLayoutComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'login',component:LoglnComponent},
      {path:'register',component:RegistrComponent},
    ]
  }
];
