import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRountingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { DefibrilateurComponent } from './pages/defibrilateur/defibrilateur.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefibrilateurComponent,
    CommandesComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
