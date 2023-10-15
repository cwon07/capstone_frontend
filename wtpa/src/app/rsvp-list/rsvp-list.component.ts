import { Component } from '@angular/core';

import { Guest } from '../shared/guest.model';
import { RsvpListService } from './rsvp-list.service';

@Component({
  selector: 'app-rsvp-list',
  templateUrl: './rsvp-list.component.html',
  styleUrls: ['./rsvp-list.component.css']
})
export class RsvpListComponent {
  guests: Guest[];

  constructor(private rlService: RsvpListService) { 
    this.guests = this.rlService.getGuests();
    this.rlService.guestsChanged.subscribe((guests: Guest[]) => {
      this.guests = guests;
    })
  }
}
