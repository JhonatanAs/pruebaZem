import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SaveEditDialogComponent } from './components/save-edit-dialog/save-edit-dialog.component';
import { ConfirmationService, SharedModule, MessageService } from 'primeng/api';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { InterceptorService } from './services/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SaveEditDialogComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DynamicDialogModule,
    DialogModule,
    SharedModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi :true
  },ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
