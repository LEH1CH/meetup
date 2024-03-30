import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Meetup } from 'src/app/models/meetup.model';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent implements OnInit, OnDestroy {
  meetups: Meetup[] = [];
  meetupSubscription!: Subscription;
  refreshInterval: number = 60000; // Refresh interval in milliseconds (1 minute)

  constructor(private meetupService: MeetupService) { }

  ngOnInit(): void {
    this.getMeetups();
    // Set up interval to refresh meetups
    this.meetupSubscription = interval(this.refreshInterval).subscribe(() => {
      this.getMeetups();
    });
  }

  ngOnDestroy(): void {
    this.meetupSubscription.unsubscribe();
  }

  getMeetups(): void {
    this.meetupService.getMeetups()
      .subscribe(meetups => {
        this.meetups = meetups;
      });
  }
}
