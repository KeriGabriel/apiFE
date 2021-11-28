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
 public getMessages(chatMessage: ChatMessage): Observable<ChatMessage>{
  return this.httpClient.get<ChatMessage>(`${this.webUrl}/kGabriel`)
 }

 public post(chatMessage: ChatMessage): Observable<ChatMessage>{
  // return this.httpClient.post<ChatMessage>("http://73.19.65.35:3500/api/channel/kGabriel", chatMessage)  
  return this.httpClient.post<ChatMessage>(`${this.webUrl}/kGabriel`, chatMessage)
 }
 
 delete(): Observable<any> {
  return this.httpClient.delete(`${this.webUrl}/kGabriel`);
 }

 public patch(chatMessage: ChatMessage): Observable<any> {
 return this.httpClient.patch<ChatMessage>(`${this.webUrl}/kGabriel`,chatMessage);
 }

}
