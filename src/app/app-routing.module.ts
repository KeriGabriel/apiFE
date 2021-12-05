import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { GetChannelsComponent } from './getChannels/getChannels.component';
import { MainComponent } from './main/main.component';

//Whenever you need to specify a channel use the following as your channel name: <first inital><last name>
//for example Jesse Harlan becomes: jharlan
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'chat', component: ChatMessageComponent },
  { path: 'getChannels', component: GetChannelsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
