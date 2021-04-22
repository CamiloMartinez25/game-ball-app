import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BallGamePageComponent } from './pages/ball-game-page/ball-game-page.component';


const routes: Routes = [{ path: '', component: BallGamePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BallGameRoutingModule { }
