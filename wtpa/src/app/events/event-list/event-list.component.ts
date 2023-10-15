import { Component, EventEmitter, Output } from '@angular/core';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Output() eventSelected = new EventEmitter<Event>();
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
}
