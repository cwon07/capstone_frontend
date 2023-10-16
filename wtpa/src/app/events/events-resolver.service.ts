import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

import { Event } from "./event.model";
import { DataStorageService } from "../shared/data-storage.service";

export const eventsResolver: ResolveFn<Event[]> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(DataStorageService).fetchEvents();
    }
