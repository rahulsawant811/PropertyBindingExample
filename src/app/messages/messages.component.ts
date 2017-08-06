import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor() { }

  @Input() msgProp: Message;

  ngOnInit() {
  }

}
