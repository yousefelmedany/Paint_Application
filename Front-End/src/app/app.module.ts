import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ApiserveService } from './service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiserveService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
