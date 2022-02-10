import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Firebase  */
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

/*  Import Angular Material */
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule, MatTab} from '@angular/material/tabs';
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
import { environment } from '../environments/environment';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

//Components
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { GlobalHeaderComponent } from './shared/components/global-header/global-header.component';
import { GlobalFooterComponent } from './shared/components/global-footer/global-footer.component';
import { PriceChartComponent } from './pages/battle/price-chart/price-chart.component';
import { RankingComponent } from './pages/battle/ranking/ranking.component';
import { HistoryComponent } from './pages/battle/history/history.component';
import { ControlComponent } from './pages/battle/control/control.component';
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAqPBq4oDDLu6QKOyhtDlPUtsWihgapwE",
  authDomain: "binary-battle.firebaseapp.com",
  projectId: "binary-battle",
  storageBucket: "binary-battle.appspot.com",
  messagingSenderId: "32076831341",
  appId: "1:32076831341:web:8edf0a4d346ba7691bbd64",
  measurementId: "G-QX44F3XG5M"
};
const app = initializeApp(firebaseConfig);

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
    ControlComponent,
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
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
