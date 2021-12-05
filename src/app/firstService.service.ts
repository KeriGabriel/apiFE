import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChatMessage } from './ChatMessage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  public chatMessage: ChatMessage[] = [];
  private webUrl = "http://73.19.65.35:3500/api/channel/";

 constructor(private httpClient: HttpClient) { }

 //read all end point
 public get(){
  return this.httpClient.get(`${this.webUrl}`);
 }

 //  public getMessages(){
 //    return this.httpClient.get("http://73.19.65.35:3500/api/channel/kGabriel")
 //  }
 public getMessages(channelName: string): Observable<ChatMessage []>{
  return this.httpClient.get<ChatMessage []>(`${this.webUrl}/${channelName}`)
 }

 public post(chatMessage: ChatMessage, channelName: string): Observable<ChatMessage>{
  console.log(chatMessage);
  return this.httpClient.post<ChatMessage>(`${this.webUrl}/${channelName}`, chatMessage)
 }
 
 delete(channelName: string): Observable<any> {
   console.log(channelName, " Deleted");
  return this.httpClient.delete(`${this.webUrl}/${channelName}`);
 }

 public patch(chatMessage: ChatMessage, channelName: string): Observable<any> {
 return this.httpClient.patch<ChatMessage>(`${this.webUrl}/${channelName}`,chatMessage);
 }

}
