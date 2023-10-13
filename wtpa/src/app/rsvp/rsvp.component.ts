import { Component } from '@angular/core';

@Component({
    selector: 'app-rsvp',
    templateUrl: './rsvp.component.html',

})

export class RsvpComponent {
    rsvpStatus: string = 'not confirmed';

    constructor() {
        this.rsvpStatus = Math.random() > 0.5 ? 'confirmed' : 'not confirmed'
    }
    getRsvpStatus() {
        return this.rsvpStatus;
    }

    getColor() {
        return this.rsvpStatus === 'confirmed' ? 'lightgreen' : 'yellow';
    }
}
