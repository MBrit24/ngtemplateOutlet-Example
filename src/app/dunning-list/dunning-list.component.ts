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
  constructor() {}
  ngOnInit() {}
}
