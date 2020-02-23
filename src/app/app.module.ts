import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { LoadingScreenInterceptor } from './helpers/loading-screen.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OverlayModule,
    PortalModule,
    MatProgressSpinnerModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 5000 }
    ),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingScreenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [LoadingScreenComponent]
})
export class AppModule { }
