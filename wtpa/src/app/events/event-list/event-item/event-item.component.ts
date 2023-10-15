import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Event } from '../../event.model'

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})

export class EventItemComponent {
  @Input() event!: Event;
  @Output() eventSelected = new EventEmitter<void>();

  onSelected() {
    this.eventSelected.emit();
  }
}
