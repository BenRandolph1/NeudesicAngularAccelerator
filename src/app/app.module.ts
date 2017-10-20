import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { ConfigModule, ConfigLoader, } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { CorsRequestOptions } from "./shared/cors-request-options";
import { environment } from '../environments/environment';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReportsComponent } from './reports/reports.component';

export function configFactory(http: Http): ConfigLoader {
  return new ConfigHttpLoader(http, environment.configUrl); // API ENDPOINT
}

export function httpFactory(backend: XHRBackend, options: CorsRequestOptions) {
  return new Http(backend, options);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ContactComponent,
    ReportsComponent
  ],
  imports: [
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [Http]
    }),
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],


  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, CorsRequestOptions]
    }, CorsRequestOptions
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }