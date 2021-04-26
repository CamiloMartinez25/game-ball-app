import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ball-game',
    pathMatch: 'full'
  },
  { 
    path: 'ball-game',
    loadChildren: () => import('./ball-game/ball-game.module')
      .then((module) => module.BallGameModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
