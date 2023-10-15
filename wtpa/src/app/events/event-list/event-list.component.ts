import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) {
    this.events = this.eventService.getEvents();
  }

  onNewEvent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
