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

  //
  public messages: ChatMessage[] = []
  message = this.messages[0];

  // @Input()
  constructor(private firstService: FirstServiceService) {
  }

  ngOnInit() {
  }

  getMessages() {
    this.firstService.getMessages('kGabriel').subscribe((message) => {
      console.log(this.messages);
      return this.messages = message;
    });
  }

}
