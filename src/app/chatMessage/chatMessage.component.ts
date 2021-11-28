import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../ChatMessage';
import { FirstServiceService } from '../firstService.service';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {
  public messages: any = [];
  
  // @Input() 
  message: ChatMessage = {
    username: "Jane",
    message: 'Where are you?',
    id: '',
    created_on: new Date(),
    updated_on: new Date()
  }

  constructor(private firstService: FirstServiceService) {
      
  }

  ngOnInit() {
  }
  
 postMessage(){
    this.firstService.post(this.message).subscribe() 
    this.message
  }
}
