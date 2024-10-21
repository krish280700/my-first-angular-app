import { Component, input } from '@angular/core';

interface Card{
  header?: string,
  body: string | any[],
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
  cardData = input<Card>()
}
