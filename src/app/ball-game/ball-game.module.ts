import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BallGameRoutingModule } from './ball-game-routing.module';
import { BallGamePageComponent } from './pages/ball-game-page/ball-game-page.component';
import { BallGameContainerComponent } from './containers/ball-game-container/ball-game-container.component';
import { BallGameResultsComponent } from './components/ball-game-results/ball-game-results.component';
import { BallGameRoomsComponent } from './components/ball-game-rooms/ball-game-rooms.component';
import { BallGameHeadersComponent } from './components/ball-game-headers/ball-game-headers.component';
import { AppComponentsModule } from '../app-components/app-components.module';
import { BallGameFooterComponent } from './components/ball-game-footer/ball-game-footer.component';
import { BallGameFormComponent } from './components/ball-game-form/ball-game-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppPipesModule } from '../app-pipes/app-pipes.module';


@NgModule({
  declarations: [
    BallGamePageComponent,
    BallGameContainerComponent,
    BallGameResultsComponent,
    BallGameRoomsComponent,
    BallGameHeadersComponent,
    BallGameFooterComponent,
    BallGameFormComponent
  ],
  imports: [
    CommonModule,
    BallGameRoutingModule,
    AppComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipesModule,
  ]
})
export class BallGameModule { }
