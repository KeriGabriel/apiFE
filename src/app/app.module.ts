import { FirstServiceService } from './firstService.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetChannelsComponent } from './getChannels/getChannels.component';
import { ChatRoomMessagesComponent } from './chatRoomMessages/chatRoomMessages.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [					
    AppComponent,
      MainComponent,
      ChatMessageComponent,
      NavbarComponent,
      GetChannelsComponent,
      ChatRoomMessagesComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [FirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
