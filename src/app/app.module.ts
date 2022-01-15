import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*  Import Angular Material */
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ControllerComponent } from './components/controller/controller.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BattleComponent } from './battle/battle.component';
import { FooBarComponent } from './components/foo-bar/foo-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ChartViewComponent,
    ControllerComponent,
    MainNavComponent,
    BattleComponent,
    FooBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
