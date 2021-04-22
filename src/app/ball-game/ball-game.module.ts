import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BallGameRoutingModule } from './ball-game-routing.module';
import { BallGamePageComponent } from './pages/ball-game-page/ball-game-page.component';
import { BallGameContainerComponent } from './containers/ball-game-container/ball-game-container.component';
import { BallGameResultsComponent } from './components/ball-game-results/ball-game-results.component';
import { BallGameRoomsComponent } from './components/ball-game-rooms/ball-game-rooms.component';
import { BallGameHeadersComponent } from './components/ball-game-headers/ball-game-headers.component';
import { AppComponentsModule } from '../app-components/app-components.module';


@NgModule({
  declarations: [BallGamePageComponent, BallGameContainerComponent, BallGameResultsComponent, BallGameRoomsComponent, BallGameHeadersComponent],
  imports: [
    CommonModule,
    BallGameRoutingModule,
    AppComponentsModule
  ]
})
export class BallGameModule { }
