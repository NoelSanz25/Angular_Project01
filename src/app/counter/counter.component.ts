import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit{
  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmit : EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter') !) || 0;
    console.log('Creando Componente')
  }

  
  setCounter(): void {
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }
}
