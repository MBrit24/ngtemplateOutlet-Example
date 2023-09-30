import { Component, OnInit } from '@angular/core';
import { DunningListComponent } from './dunning-list/dunning-list.component';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DunningListComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
