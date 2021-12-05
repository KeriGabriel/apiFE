import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../firstService.service';

@Component({
  selector: 'app-getChannels',
  templateUrl: './getChannels.component.html',
  styleUrls: ['./getChannels.component.scss']
})
export class GetChannelsComponent implements OnInit {

  public channels: any[] = [];
  channel = this.channels[0];

  constructor(private firstService: FirstServiceService) {

    this.firstService.get().subscribe((channel) => {
      console.log("the component got the following channels: ", channel)
      return this.channels = channel;
    });
  }
  ngOnInit(): void {
  }

}
