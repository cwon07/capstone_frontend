import { EventEmitter, Injectable } from "@angular/core";

import { Event } from './event.model';
import { Guest } from "../shared/guest.model";
import { RsvpListService } from '../rsvp-list/rsvp-list.service';

@Injectable()
export class EventService {
    eventSelected = new EventEmitter<Event>();

    private events: Event[] = [
        new Event(
            'Test Event 1', 
            'Test birthday party', 
            'https://i.etsystatic.com/10706667/r/il/b16cf1/4968450743/il_1588xN.4968450743_mkx8.jpg', 
            'November 1, 2023', 
            '11 am', 
            '123 street', 
            'RSVP by October 20th', 
            '123-345-6789',
            [
                new Guest('Michael', 2, 1),
                new Guest('George', 1, 2)
            ]
        )
    ];

    constructor(private rlService: RsvpListService) {}

        getEvents() {
            return this.events.slice();
        }

        getEvent(index: number) {
            return this.events[index];
        }

        addGuestsToRsvpList(guests: Guest[]) {
            this.rlService.addGuests(guests);
        }

}