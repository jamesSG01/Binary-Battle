import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { GlobalHeaderComponent } from './shared/components/global-header/global-header.component';
import { GlobalFooterComponent } from './shared/components/global-footer/global-footer.component';
import { PriceChartComponent } from './pages/battle/price-chart/price-chart.component';
import { RankingComponent } from './pages/battle/ranking/ranking.component';
import { HistoryComponent } from './pages/battle/history/history.component';
@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    HomeComponent,
    AuthenticationComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    PriceChartComponent,
    RankingComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
