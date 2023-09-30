import { CommonModule } from '@angular/common';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class CardComponent implements OnInit {
  @ContentChild('card') card: TemplateRef<unknown> | undefined;
  constructor() {}

  ngOnInit() {}
}
