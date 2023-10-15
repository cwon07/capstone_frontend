import { Component } from '@angular/core';

import { Event } from './event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {
  selectedEvent!: Event;

  constructor(private eventService: EventService) {
    this.eventService.eventSelected.subscribe((event: Event) => {
      this.selectedEvent = event;
    }
    );
  }
}
