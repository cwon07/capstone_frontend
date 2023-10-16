import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Event } from './event.model';
import { Guest } from "../shared/guest.model";
import { RsvpListService } from '../rsvp-list/rsvp-list.service';

@Injectable()
export class EventService {
    eventsChanged = new Subject<Event[]>();

 private events: Event[] = [];

constructor(private rlService: RsvpListService) {}

    setEvents(events: Event[]) {
     this.events = events;
     this.eventsChanged.next(this.events.slice());
    }

    getEvents() {
        return this.events.slice();
    }

    getEvent(index: number) {
        return this.events[index];
    }

    addGuestsToRsvpList(guests: Guest[]) {
        this.rlService.addGuests(guests);
    }

    addEvent(event: Event) {
        this.events.push(event);
        this.eventsChanged.next(this.events.slice());
    }

    updateEvent(index: number, newEvent: Event) {
        this.events[index] = newEvent;
        this.eventsChanged.next(this.events.slice());
    }

    deleteEvent(index: number) {
        this.events.splice(index, 1);
        this.eventsChanged.next(this.events.slice());
    }
}