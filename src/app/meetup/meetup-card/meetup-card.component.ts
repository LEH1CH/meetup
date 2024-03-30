// meetup-card.component.ts

import { Component, Input } from '@angular/core';
import { Meetup } from '../../models/meetup.model';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent {
  @Input()
  meetup!: Meetup;

  constructor() { }
}
