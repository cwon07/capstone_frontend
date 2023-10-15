import { Component, Input } from '@angular/core';

import { Event } from '../event.model';
import { EventService } from '../event.service'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  @Input() event!: Event

  constructor(private eventService: EventService) {}
  
  onAddToRsvpList() {
    this.eventService.addGuestsToRsvpList(this.event.guests);
  }
}
