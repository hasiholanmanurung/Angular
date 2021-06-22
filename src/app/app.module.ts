import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-module-routing';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PelangganComponent } from './pelanggan/pelanggan.component';
import { PelangganDetailComponent } from './pelanggan-detail/pelanggan-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { BukuComponent } from './buku/buku.component';
import { BukuDetailComponent } from './buku-detail/buku-detail.component';
import { SalamComponent } from './salam/salam.component';
import { BukuNewComponent } from './buku-new/buku-new.component';


@NgModule({
  declarations: [
    AppComponent,
    PelangganComponent,
    PelangganDetailComponent,
    MessagesComponent,
    BukuComponent,
    BukuDetailComponent,
    SalamComponent,
    BukuNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
