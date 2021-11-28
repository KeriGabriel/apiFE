import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../firstService.service';

@Component({
  selector: 'app-getChannels',
  templateUrl: './getChannels.component.html',
  styleUrls: ['./getChannels.component.scss']
})
export class GetChannelsComponent implements OnInit {

 public channels: any[] = [];

  constructor(private firstService: FirstServiceService) {
    
    this.firstService.get().subscribe((data) => {
      console.log("the component got the following channels: ", data)
      this.channels.push({
        data
      });    
    });
 }
  ngOnInit(): void {
    
  }

}
