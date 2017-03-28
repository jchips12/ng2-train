import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Ng2TrainService } from './service/ng2-train.service';
import { MockDataService } from './service/mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockDataService, { apiBase: 'api/v1/', delay: 500 } ),
  ],
  providers: [Ng2TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
