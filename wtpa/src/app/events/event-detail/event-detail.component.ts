import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Event } from '../event.model';
import { EventService } from '../event.service'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  event!: Event;
  id!: number;

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private router: Router) {
                this.route.params.subscribe((params: Params) => {this.id = +params['id']; this.event = this.eventService.getEvent(this.id);}
                )
  }
  
  onAddToRsvpList() {
    this.eventService.addGuestsToRsvpList(this.event.guests);
  }

  onEditEvent() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
