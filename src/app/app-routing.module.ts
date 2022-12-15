import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefibrilateurComponent } from './pages/defibrilateur/defibrilateur.component';
import { CommandesComponent } from './pages/commandes/commandes.component';

const routes: Routes = [

  { path:'',  redirectTo: 'defibrilateur',pathMatch:'full'},
  
  {  path: 'defibrilateur',component: DefibrilateurComponent  },
  
  { path: 'commandes', component: CommandesComponent },

  { path: '**', component: DefibrilateurComponent }

  ];
  
  @NgModule({
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRountingModule { }
