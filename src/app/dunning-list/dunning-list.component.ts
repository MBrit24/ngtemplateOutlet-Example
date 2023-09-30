import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-dunning-list',
  templateUrl: './dunning-list.component.html',
  styleUrls: ['./dunning-list.component.css'],
  standalone: true,
  imports: [CardComponent, DetailsComponent],
})
export class DunningListComponent implements OnInit {
  private dunningDetails1_Invoice1 = {
    invoiceNumber: '20230001',
    date: '01/01/2023',
    amount: 4000,
    rest: 200,
  };

  private dunningDetails2_Invoice1 = {
    invoiceNumber: '20230002',
    date: '11/06/2023',
    amount: 14000,
    rest: 10000,
  };

  private dunningDetails3_Invoice1 = {
    invoiceNumber: '20230003',
    date: '24/09/2023',
    amount: 2000,
    rest: 2000,
  };

  private dunningDetails1_Invoice2 = {
    invoiceNumber: '20220011',
    date: '01/01/2022',
    amount: 99,
    rest: 99,
  };
  private dunningDetails2_Invoice2 = {
    invoiceNumber: '20220022',
    date: '11/06/2022',
    amount: 300,
    rest: 300,
  };

  public dunnings = [
    {
      code: 'ANDPA',
      adress: '4 Pl. Jussieu<br/> 75005 Paris',
      company: 'Zneg',
      level: 1,
      invoiceUnpaidCount: 3,
      amountDunning: 140000,
      details: [
        this.dunningDetails1_Invoice1,
        this.dunningDetails2_Invoice1,
        this.dunningDetails3_Invoice1,
      ],
    },
    {
      code: 'ANDPA',
      company: 'Zneg',
      level: 2,
      invoiceUnpaidCount: 2,
      amountDunning: 399,
      details: [this.dunningDetails1_Invoice2, this.dunningDetails2_Invoice2],
    },
  ];

  constructor() {}
  ngOnInit() {}
}
