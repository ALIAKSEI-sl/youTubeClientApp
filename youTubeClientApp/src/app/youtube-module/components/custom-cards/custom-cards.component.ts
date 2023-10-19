import { Component, Input } from '@angular/core';

import { ICustomCard } from 'src/app/redux/state.models';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss'],
})
export class CustomCardsComponent {
  @Input() customCard!: ICustomCard;
}
