import { CommonModule } from '@angular/common';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class DetailsComponent implements OnInit {
  @ContentChild('headerDetail') headerDetail: TemplateRef<unknown> | undefined;
  @ContentChild('rowsDetail') rowsDetail: TemplateRef<unknown> | undefined;

  constructor() {}

  ngOnInit() {}
}
