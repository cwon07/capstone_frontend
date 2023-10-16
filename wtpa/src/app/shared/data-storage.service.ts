import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Event } from '../events/event.model';
import { EventService } from '../events/event.service';

@Injectable({ providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private eventService: EventService) {}

    storeEvents() {
        const events = this.eventService.getEvents();
        this.http
            .put('https://wtpa-afd8c-default-rtdb.firebaseio.com/events.json',
            events
            )
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchEvents() {
        return this.http
            .get<Event[]>(
                'https://wtpa-afd8c-default-rtdb.firebaseio.com/events.json'
            )
            .pipe(
                map(events => {
                return events.map(event => {
                    return {
                        ...event, 
                        guests: event.guests ? event.guests : []
                        };
                    });
                }),
                tap(events => {
                    this.eventService.setEvents(events);
                })
             )
    }
}