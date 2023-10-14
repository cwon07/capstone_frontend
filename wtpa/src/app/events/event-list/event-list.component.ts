import { Component, EventEmitter, Output } from '@angular/core';

import { Event } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Output() eventSelected = new EventEmitter<Event>();
  events: Event[] = [
    new Event('Test Event 1', 'Test birthday party', 'https://i.etsystatic.com/10706667/r/il/b16cf1/4968450743/il_1588xN.4968450743_mkx8.jpg', 'November 1, 2023', '11 am', '123 street', 'RSVP by October 20th', '123-345-6789')
  ]
  onEventSelected(event: Event) {
    this.eventSelected.emit(event);
  }
}
