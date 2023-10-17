import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Event } from "./event.model";
import { DataStorageService } from "../shared/data-storage.service";
import { EventService } from "./event.service";

@Injectable({ providedIn: 'root'})
export class EventsResolverService implements Resolve<Event[]>{
    constructor(
        private dataStorageService: DataStorageService,
        private eventsService: EventService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const events = this.eventsService.getEvents();

        if (events.length === 0) {
            return this.dataStorageService.fetchEvents();
        } else {
            return events;
        }
    }
}

