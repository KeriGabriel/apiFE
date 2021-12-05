import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatMessage } from '../ChatMessage';
import { FirstServiceService } from '../firstService.service';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})

export class ChatMessageComponent implements OnInit {
  public messages: any = [];

  //variable to hold form
  chatForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
     message:['', Validators.required]
  })
  
  // @Input() 
  message: ChatMessage = {
    username: "Bob",
    message: 'I am at the beach!',
    id: '',
    created_on: new Date(),
    updated_on: new Date()
  }

  constructor(private firstService: FirstServiceService, private fb: FormBuilder) {
      this.initForm();
  }

 initForm(): void{
   this.chatForm = this.fb.group({
     // these are formControls by defalt
    username: ['', Validators.required],
    message:['', Validators.required]
     
    });
  }

  //lifecycle hook
  ngOnInit() {

  }
  
  onSubmit(){
    console.log("Form Submited", this.chatForm);
    let newMessage = {
      username: this.chatForm.value.username,
      message: this.chatForm.value.message,
      id: " ",
     created_on: new Date,
     updated_on: new Date

    }
    this.firstService.post(newMessage, "kGabriel").subscribe(data =>{
      console.log(data);
      this.initForm();
    })
  }

//  postMessage(){
//     this.firstService.post(this.message,'kGabriel').subscribe() 
//     this.message
//     console.log(this.message);
//   }
}
