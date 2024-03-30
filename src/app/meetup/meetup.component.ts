// meetup.component.ts

import { Component, OnInit } from '@angular/core';
import { Meetup } from '../models/meetup.model';
import { MeetupService } from '../services/meetup.service';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss']
})
export class MeetupComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
