import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ChartViewComponent } from './battle/chart-view/chart-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*  Import Angular Material */
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule, MatIcon} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BattleComponent } from './battle/battle.component';
import { FooBarComponent } from './components/foo-bar/foo-bar.component';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './battle/ranking/ranking.component';
import { HistoryComponent } from './battle/history/history.component';
import { ControlComponent } from './battle/control/control.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ChartViewComponent,
    MainNavComponent,
    BattleComponent,
    FooBarComponent,
    HomeComponent,
    RankingComponent,
    HistoryComponent,
    ControlComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
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
    MatMenuModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
