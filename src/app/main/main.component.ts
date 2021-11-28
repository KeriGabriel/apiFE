import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../firstService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private firstService: FirstServiceService) { 

  }

  ngOnInit() {
  }

  deleteChannel(){
    this.firstService.delete().subscribe(res =>
    console.log(res))
    alert("Your Channel was Deleted")
    
  }
  
}


