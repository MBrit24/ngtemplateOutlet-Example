import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, DetailsComponent],
  standalone: true,
})
export class CardComponent implements OnInit {
  @ContentChild('card') card: TemplateRef<unknown> | undefined;
  // @ContentChild('headerDetail') headerDetail: TemplateRef<unknown> | undefined;
  // @ContentChild('rowsDetail') rowsDetail: TemplateRef<unknown> | undefined;
  @Input() data!: unknown[];
  constructor() {}

  ngOnInit() {}
}
