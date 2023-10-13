import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvps',
  templateUrl: './rsvps.component.html',
  styleUrls: ['./rsvps.component.css']
})
export class RsvpsComponent {
  allowNewRsvp = false;
  rsvpCreationStatus = 'No RSVP was created';
  rsvpName = 'rsvpName';
  rsvpCreated = false;
  rsvps = ['RSVP1', 'RSVP2']

  constructor() {
    setTimeout(() => {
      this.allowNewRsvp = true;
    }, 2000)
  }

  onCreateRsvp() {
    this.rsvpCreated = true;
    this.rsvps.push(this.rsvpName);
    this.rsvpCreationStatus = `RSVP of ${this.rsvpName} has been created.`;
  }

  onUpdateRsvpName(event: Event) {
    this.rsvpName = (<HTMLInputElement>event.target).value;
  }
}
