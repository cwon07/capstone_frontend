import { Action } from "rxjs/internal/scheduler/Action";

import { Event } from "../event.model";

export const SET_EVENTS = '[Events] Set Events';

export class SetEvents implements Action {
    readonly type = SET_EVENTS;

    constructor(public payload: Event[])
}

export type EventsActions = SetEvents;