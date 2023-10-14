import { Component } from '@angular/core';

import { Guest } from '../shared/guest.model';

@Component({
  selector: 'app-rsvp-list',
  templateUrl: './rsvp-list.component.html',
  styleUrls: ['./rsvp-list.component.css']
})
export class RsvpListComponent {
  guests: Guest[] = [
    new Guest('Chris', 1, 2),
    new Guest('Jemma', 2, 1)
  ];
}
