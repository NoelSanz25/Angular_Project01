import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent,InvoiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'First Project Angular';
  subTitle = 'Contador de Estados de Sesión';

  users: string[] = ['Karl','Noel','JH','Champ','Tests'];

  visible: boolean = false;

  counter : number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter') !) || 0;
  }

  setVisible(): void{
    this.visible = this.visible? false: true;
    console.log('Hemos hecho clic en el método setVisible');
  }

  setCounter(counter:number): void{
    this.counter = counter;
  }
}
