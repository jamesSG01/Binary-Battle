import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})

export class GlobalHeaderComponent implements OnInit {
  @Output("hl") myEvent = new EventEmitter<string>();
  modalOff(): void {
    this.myEvent.emit();
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
