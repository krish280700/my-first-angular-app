import { Component, Input, signal } from '@angular/core';

interface Card{
  header?: string,
  body: string | string[],
  footer?: string | any[],
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardData?: Card;
  bodyType = signal('text');

  ngOnInit() {
    this.bodyType.set(Array.isArray(this.cardData?.body) ? 'list' : 'text');
  }
  // console.log(this.bodyType, this.cardData?.body)
}
