import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../ChatMessage';
import { FirstServiceService } from '../firstService.service';

@Component({
  selector: 'app-chatRoomMessages',
  templateUrl: './chatRoomMessages.component.html',
  styleUrls: ['./chatRoomMessages.component.scss']
})

export class ChatRoomMessagesComponent implements OnInit {

  // message: ChatMessage = {
  //   username: '',
  //   message: '',
  //   id: '',
  //   created_on: new Date(),
  //   updated_on: new Date()
  // }
  public messages: any = [
    
    
  ];
  message = this.messages[0];
  
  // @Input()
   

  constructor(private firstService: FirstServiceService) { 
    
  }

  ngOnInit() {
  }

  getMessages(){
    this.firstService.getMessages(this.message).subscribe((message) => {
      return this.messages.push({ message });  
    });
  }

}
