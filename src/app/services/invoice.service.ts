import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoceData } from '../data/invoice.data';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoceData;
  constructor() { }

  getInvoice(): Invoice{
    return this.invoice;
  }
}
